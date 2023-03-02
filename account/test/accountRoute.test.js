import request from 'supertest';
import {
    afterEach, beforeEach, describe, expect, it, jest
} from '@jest/globals';
import app from '../src/app.js';

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET in /admin/accounts', () => {
    it('Should return a list of accounts', async () => {
        const response = await request(app)
            .get('/admin/accounts')
            .set('Accept', 'application/json')
            .expect('content-type', /json/);

        expect(response.body[0].name).toEqual('Ada Lovelace');
        expect(response.body[0].email).toEqual('programmingIsCool@example.com');
    });
});

let idResponse;
describe('POST in /admin/accounts', () => {
    it('Should add a new user in account', async () => {
        const response = await request(app)
            .post('/admin/accounts')
            .send({
                name: "Katie Bouman",
                email: "drKatie@example.com",
                password: "PhotoOf@!42",
                cpf: "55110724431",
                cellphone: "8791216849",
                address: {
                    street: "Rua Retorno",
                    number: "35",
                    complement: "House with grass wall",
                    district: "Pernambuco",
                    CEP: "56323600",
                    city: "Petrolina",
                    state: "PE"
                }
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);

        // eslint-disable-next-line no-underscore-dangle
        idResponse = response.body._id;
    });

    it('Should not add anything when passing empty body', async () => {
        await request(app)
            .post('/admin/accounts')
            .send({})
            .expect(422);
    });
});

describe('GET in /admin/accounts/:id', () => {
    it('Should return the selected account', async () => {
        await request(app)
            .get(`/admin/accounts/${idResponse}`)
            .expect(200);
    });

    it('Should not return a category when passing an invalid ID', async () => {
        await request(app)
            .get('/admin/accounts/invalidIdHere123')
            .expect(404);
    });
});

describe('PUT in /admin/accounts/:id', () => {
    it('Should update the user info', async () => {
        await request(app)
            .put(`/admin/accounts/${idResponse}`)
            .send({
                name: "Katie Bouman",
                email: "drKatie@example.com",
                password: "PhotoOf@!42",
                cpf: "55110724431",
                cellphone: "8791216849",
                address: {
                    street: "Rua Retorno",
                    number: "35",
                    complement: "House with grass wall and located on the corner",
                    district: "Pernambuco",
                    CEP: "56323600",
                    city: "Petrolina",
                    state: "PE"
                }
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    });

    it('Should not change any field when passing an invalid ID', async () => {
        await request(app)
            .put('/admin/accounts/invalidIdHere123')
            .send({
                name: "Katie Bouman",
                email: "drKatie@example.com",
                password: "PhotoOf@!42",
                cpf: "55110724431",
                cellphone: "8791216849",
                address: {
                    street: "Rua Retorno",
                    number: "35",
                    complement: "House located on the corner",
                    district: "Pernambuco",
                    CEP: "56323600",
                    city: "Petrolina",
                    state: "PE"
                }
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(400);
    });
});

describe('DELETE in /admin/accounts/:id', () => {
    it('Should delete the resource corresponding to the chosen ID', async () => {
        await request(app)
            .delete(`/admin/accounts/${idResponse}`)
            .expect(204);
    });

    it('Should not delete a resource when passing an invalid ID', async () => {
        await request(app)
            .delete('/admin/accounts/invalidIdHere123')
            .expect(400);
    });
});
