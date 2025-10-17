import { Card, CardContent, CardMedia, Typography,Button,  CardActions } from "@mui/material";
import { IProduct } from "../Model/IProduct";
import { AddShoppingCart } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';



interface Props {
    product: IProduct
}

export default function Product({product} : Props)
{
  return (
   <Card>
    <CardMedia sx={{ height:160,backgroundSize:"contain"}} image={`http://localhost:5173/images/${product.imageUrl}`}/>
    <CardContent>
   <Typography gutterBottom variant="h6" component="h2" color="text.secondary">{product.name}</Typography>
   <Typography variant="body2" color="secondary">{ product.price}</Typography>
   <CardActions>
      
      <Button size="small" variant="outlined" startIcon={<AddShoppingCart/>} color="success">Add to cart</Button>
      <Button size="small" variant="contained"  startIcon ={<SearchIcon/>} color="primary"> View</Button>

   </CardActions>
    </CardContent>
   </Card>
  );
}