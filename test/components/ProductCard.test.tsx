import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { ProductCart } from '../../src/components';
import { product } from '../data/products';

const { act } = TestRenderer

describe('ProductCard', () => {

    test('debe mostrar el componente correctamente', () => {
        const wrapper = TestRenderer.create(
            <ProductCart product={product}>
                {
                    () => (
                        <h1>ProductCard</h1>
                    )
                }
            </ProductCart>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe incrementar el contador', () => { 
        const wrapper = TestRenderer.create(
            <ProductCart product={product}>
                {({count, increaseBy}) => (
                    <>
                        <h1>ProductCard</h1>
                        <span>{count}</span>
                        <button onClick={ () => increaseBy(1)}>+1</button>
                    </>
                )}
            </ProductCart>
        )

        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot();
        act( () => {
          (tree as any).children[2].props.onClick();
        })
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
     })
})