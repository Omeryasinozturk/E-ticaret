import { IProduct } from "../Model/IProduct";

interface Props {
    product: IProduct
}

export default function Product({product} : Props)
{
  return (
    <>
      { product.isActive ? (
        <div>
          <h3>{ product.name }</h3>
          <p> { product.price }</p>
        </div>
      ) : <h3>{product.name} satışta değil </h3>
      }
    </>
  );
}