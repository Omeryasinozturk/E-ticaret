import { IProduct } from "../Model/IProduct";
import Product from "./Product";

interface Props {
    products: IProduct[],
    addProduct: () => void
}



export default function ProductList( {products,addProduct}: Props)
{
 
  return (  
    <div>
    <h2>productlist</h2>
    {products.map((p:IProduct) => (
      <Product key ={p.id} product={p}/>
    ))}

    <button onClick={addProduct}>Add product</button>
     </div>
  );
}