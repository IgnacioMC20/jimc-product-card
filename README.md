# jimc-product-card

Este es un paquete de prueba

```
import {ProductCart, ProductImage, ProductTitle, ProductButtons} from 'jimc-product-card'
```

```
<ProductCart
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
 {
   ({reset, count, isMaxCountReached, increaseBy}) => (
     <>
       <ProductImage  />
       <ProductTitle />
       <ProductButtons />
     </>
   )
 }
</ProductCart>
```