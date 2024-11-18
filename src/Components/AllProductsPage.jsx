import React, { useState } from "react";
import ProductsList from "./ProductsList";
import productsData from "../data/productsData";

const AllProductsPage = () => {
    const [products] = useState(productsData);

    return (
        <div>
            <h1>Product List</h1>
            <ProductsList products={products} />
        </div>
    );
};

export default AllProductsPage;
