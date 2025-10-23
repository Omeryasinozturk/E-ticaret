import { CircularProgress, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../Model/IProduct";
import requests from "../../api/requests";



export default function ProductDetailsPage() {

    const {id} = useParams<{id: string}>();
    const [loading,setLoading] = useState(true);
    const [product,setProducts] = useState<IProduct | null >(null);
    useEffect(() => {
       id && requests.Catalog.Details(parseInt(id))
       .then(data => setProducts(data)).catch(error => console.log(error)).finally( ()=>setLoading(false));
       
  }, [id]);
    
  
  
  if  (loading) return <CircularProgress />;
  if (!product) return <h5>Product not found</h5>


  return (
    
   <Grid container spacing={6}>  
    <Grid size={{xl:3,lg:4, md:5 ,sm:6,xs:12}}>
        <img src={`http://localhost:5173/images/${product.imageUrl}`} alt={product.name} style={{width:"100%" , objectFit:"contain"}}/>
    </Grid>
    <Grid size={{xl:9,lg:8, md:7 ,sm:6,xs:12}}>
        <Typography variant="h3" gutterBottom>{product.name}</Typography>
        <Divider sx={{my:2}}/>
     <Typography variant="body2" color="secondary">{ product.price}</Typography>
        <TableContainer>
            <Table> 
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>stock</TableCell>
                        <TableCell>{product.stock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
   </Grid>
);
}