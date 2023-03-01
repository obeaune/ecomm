const {
    afterEach, beforeEach, describe, expect, it
} = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app.js');

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET in /payments', () => {
    it('Should return a list of payments', async () => {
        const response = await request(app)
            .get('/payments')
            .set('Accept', 'application/json')
            .expect('content-type', /json/);

        expect(response.body[0].name).toEqual('Ada Lovelace');
        expect(response.body[0].status).toEqual('CONFIRMED');
    });
});

let idResponse;
describe('POST in /payments', () => {
    it('Should add a new payment', async () => {
        const response = await request(app)
            .post('/payments')
            .send({
                value: 20.99,
                name: 'Johanna Huijts',
                number_card: '5314545473247744',
                expiration_date: '2024-03',
                cvv: '724',
                status: 'CREATED'
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);

        idResponse = response.body.id;
    });

    it('Should not add anything when passing empty body', async () => {
        await request(app)
            .post('/payments')
            .send({})
            .expect(422);
    });
});

describe('GET in /payments/:id', () => {
    it('Should return the selected payment', async () => {
        await request(app)
            .get(`/payments/${idResponse}`)
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    });

    it('Should not return a payment when passing an invalid ID', async () => {
        await request(app)
            .get('/payments/invalidIdHere123')
            .expect(404);
    });
});

describe('PATCH in /payments/status/:id', () => {
    it('Should change the payment when passing a valid ID and STATUS', async () => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await req.request(app)
            .patch(`/payments/status/${idResponse}`)
            .send({ status: 'CONFIRMED' })
            .set('Accept', 'application/json')
            .expect(200);
        expect(spy).toHaveBeenCalled();
    });

    it('Should not change the payment when passing a empty body', async () => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await request(app)
            .patch(`/payments/status/${idResponse}`)
            .send({})
            .expect(405);
        expect(spy).not.toHaveBeenCalled();
    });

    it('Should not change the field STATUS when passing an invalid ID', async () => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await request(app)
            .patch('/payments/status/invalidIdHere123')
            .send({ status: 'CONFIRMED' })
            .expect(500);
        expect(spy).not.toHaveBeenCalled();
    });
});
