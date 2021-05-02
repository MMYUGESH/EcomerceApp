
import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

/*const products = [
    { id: 1, name: "shoes", description: "running shoes", price: "$15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEAXlgFNE4wKyhXCWHA5pm_B3vlwEQoIJcQ&usqp=CAU" },
    { id: 2, name: "Macbook", description: "Apple macbook", price: "$25", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9AUNe2eCVdXI-RUNHBQm3ycmQY_GbvO_-A&usqp=CAU" }
];*/

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (

        <main className={classes.content}>
            <div className={classes.toolbar} />

            <Grid container justify="center" spacing={4}>
                {products.map((product) => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>

                            <Product product={product} onAddToCart={onAddToCart} />

                        </Grid>
                    )
                })}
            </Grid>
        </main>


    )

}
export default Products;