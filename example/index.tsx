import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCart, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const App = () => {
  return (
    <ProductCart
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10
      }}
    >
      {
        ({ reset, count, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
    </ProductCart>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
