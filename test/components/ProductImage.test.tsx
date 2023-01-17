import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ProductImage, ProductCart } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {

    test('debe mostrar el componente sin imagen', () => {
        const wrapper = TestRenderer.create(
            <ProductImage img='https:hola.jpg'/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente con imagen', () => {
        const wrapper = TestRenderer.create(
            <ProductCart product={product2}>
                {() => (
                    <ProductImage />
                )}
            </ProductCart>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})