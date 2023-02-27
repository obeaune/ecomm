import {
    describe, expect, test, jest
} from '@jest/globals';
import categories from '../src/models/Category.js';

describe('Testing Category model', () => {
    const objectCategory = {
        name: 'BEAUTY',
        status: 'Active'
    };

    test('Instantiate a new Category', () => {
        const category = new categories(objectCategory);
        expect(category).toEqual(expect.objectContaining(objectCategory));
    });

    test('Make a simulated call to DB', () => {
        const category = new categories(objectCategory);
        category.createCategory = jest.fn().mockReturnValue(
            {
                // objectId ->
                id: '42ea',
                name: 'BEAUTY',
                status: 'Active'
            }
        );
        const response = category.createCategory();
        expect(response).toEqual(expect.objectContaining(
            { id: expect.any(String), ...objectCategory }
        ));
    });
});
