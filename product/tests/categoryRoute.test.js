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

describe('GET in /categories', () => {
    it('Should return a list of categories', async () => {
        const response = await request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('content-type', /json/);

        expect(response.body[0].name).toEqual('HAIR');
        expect(response.body[0].status).toEqual('Inactive');
    });
});

let idResponse;
describe('POST in /admin/categories', () => {
    it('Should add a new category', async () => {
        const response = await request(app)
            .post('/admin/categories')
            .send({ name: 'BEAUTY', status: 'Inactive' })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);
        // eslint-disable-next-line no-underscore-dangle
        idResponse = response.body._id;
    });

    it('Should not add anything when passing empty body', async () => {
        await request(app)
            .post('/admin/categories')
            .send({})
            .expect(422);
    });
});

describe('GET in /categories/:id', () => {
    it('Should return the selected category', async () => {
        await request(app)
            .get(`/categories/${idResponse}`)
            .expect(200);
    });

    it('Should not return a category when passing an invalid ID', async () => {
        await request(app)
            .get('/categories/invalidIdHere123')
            .expect(404);
    });
});

describe('PUT in /admin/categories/:id', () => {
    it('Should update the category', async () => {
        await request(app)
            .put(`/admin/categories/${idResponse}`)
            .send({ name: 'BOOKS', status: 'Active' })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    });

    it('Should not change any field when passing an invalid ID', async () => {
        await request(app)
            .put('/admin/categories/invalidIdHere123')
            .send({ name: 'CELLPHONES', status: 'Inactive' })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(400);
    });
});

describe('PATCH in /admin/categories/:id', () => {
    it('Should change the field STATUS', async () => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await req.request(app)
            .patch(`/admin/categories/${idResponse}`)
            .send({ status: 'Inactive' })
            .expect(200);
        expect(spy).toHaveBeenCalled();
    });

    it('Should not change the field STATUS when passing an invalid ID', async () => {
        const req = { request };
        const spy = jest.spyOn(req, 'request');
        await request(app)
            .patch('/admin/categories/invalidIdHere123')
            .send({ status: 'Inactive' })
            .expect(400);
        expect(spy).not.toHaveBeenCalled();
    });
});

describe('DELETE in /admin/categories/:id', () => {
    it('Should delete the resource corresponding to the chosen ID', async () => {
        await request(app)
            .delete(`/admin/categories/${idResponse}`)
            .expect(204);
    });

    it('Should not delete a resource when passing an invalid ID', async () => {
        await request(app)
            .delete('/admin/categories/invalidIdHere123')
            .expect(400);
    });
});
