import { useEffect, useState } from "react";
import { IProduct } from "../Model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";

function App() {
//  const [count, setCount] = useState(0)

 const [products,setProducts] = useState<IProduct[]>([]);


  useEffect (()=>{
  fetch("http://localhost:5173/api/products").then(response => response.json()).then(data => setProducts(data));
  },[]);


 function addProduct() {
    setProducts([...products, 
      { 
        id:Date.now() ,
        name: "product 4", 
        price: 4000, 
        isActive: true, 
      }])
  }
  console.log("Render")


 return(
  <>
 <Header products={products} addProduct={addProduct}/>
 <ProductList products={products} addProduct={addProduct} />
 </>
);
}

export default App
