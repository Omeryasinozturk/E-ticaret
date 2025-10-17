import { useEffect, useState } from "react";
import { IProduct } from "../Model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import { Container, CssBaseline } from "@mui/material";

function App() {
//  const [count, setCount] = useState(0)

 const [products,setProducts] = useState<IProduct[]>([]);


  useEffect (()=>{
  fetch("http://localhost:5173/api/products").then(response => response.json()).then(data => setProducts(data));
  },[]);



 return(
  <>
  <CssBaseline />
  <Header />
  <Container>
  <ProductList products={products}  />
  </Container>
 </>
);
}

export default App
