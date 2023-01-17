import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ProductTitle, ProductCart } from '../../src/components';
import { product } from '../data/products';

describe('ProductTitle', () => {

    test('debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = TestRenderer.create(
            <ProductTitle title='CustomProduct' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente con el nombre del prodcuto', () => {
        const wrapper = TestRenderer.create(
            <ProductCart product={product}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCart>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})