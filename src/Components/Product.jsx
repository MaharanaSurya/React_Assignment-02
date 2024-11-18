import React from "react";

const Product = ({ product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>Rs. {product.price}</td>
        </tr>
    );
};

export default Product;
