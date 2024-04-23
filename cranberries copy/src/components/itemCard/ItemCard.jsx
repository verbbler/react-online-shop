import React from 'react';

import Product from './product/product';
import ProductMenu from './product-menu/product-menu';
import RelatedProducts from './related-products/relatedProducts';
import Header from '../header/header';

export default function ItemCard() {
    return (
        <>
            <Header />
            <Product />
            <ProductMenu />
            <RelatedProducts />
        </>
    )
}