import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
    return (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
};

export default ProductsList;
