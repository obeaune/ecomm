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

describe('GET in /products', () => {
    it('Should return a list of products', async () => {
        const response = await request(app)
            .get('/products')
            .set('Accept', 'application/json')
            .expect('content-type', /json/);

        expect(response.body[0].name).toEqual('Notebook Samsung');
        expect(response.body[0].slug).toEqual('notebook-samsung');
    });
});

let idResponse;
describe('POST in /admin/products', () => {
    const objectProduct = {
        name: 'Shampoo Detox',
        description: 'Helps your hair',
        slug: 'somethingCool-pg5',
        price: 24.59,
        quantity: 20,
        categoryId: '63fd2e1a2fe305017b5fe6bd'
    }

    it('Should add a new product', async () => {
        const response = await request(app)
            .post('/admin/products')
            .send(objectProduct)
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);

        // eslint-disable-next-line no-underscore-dangle
        idResponse = response.body._id;
    });

    it('Should not add anything when passing empty body', async () => {
        await request(app)
            .post('/admin/products')
            .send({})
            .expect(422);
    });
});

describe('GET in /products/:id', () => {
    it('Should return the selected product', async () => {
        await request(app)
            .get(`/products/${idResponse}`)
            .expect(200);
    });

    it('Should not return a product when passing an invalid ID', async () => {
        await request(app)
            .get('/products/invalidIdHere123')
            .expect(404);
    });
});

describe('PUT in /admin/products/:id', () => {
    const objectProduct = {
        name: 'Dry shampoo',
        description: 'Helps your hair',
        slug: 'somethingCool-pg5',
        price: 24.59,
        quantity: 20,
        categoryId: '63fd2e1a2fe305017b5fe6bd'
    }

    it('Should update the product', async () => {
        await request(app)
            .put(`/admin/products/${idResponse}`)
            .send(objectProduct)
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
    });

    it('Should not change any field when passing an invalid ID', async () => {
        await request(app)
            .put('/admin/products/invalidIdHere123')
            .send(objectProduct)
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(400);
    });
});

describe('DELETE in /admin/products/:id', () => {
    it('Should delete the resource corresponding to the chosen ID', async () => {
        await request(app)
            .delete(`/admin/products/${idResponse}`)
            .expect(204);
    });

    it('Should not delete a resource when passing an invalid ID', async () => {
        await request(app)
            .delete('/admin/products/invalidIdHere123')
            .expect(400);
    });
});
