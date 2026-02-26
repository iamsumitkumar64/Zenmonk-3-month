"use client"
import './all_products.css' // Changed to .css
import { useEffect, useState } from "react"
import { ApiCallService } from "../../services/http"
import Image from 'next/image';

export default function AllProductsComp() {
    const [productsList, setProductsList] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await ApiCallService(`${process.env.NEXT_PUBLIC_ALL_PRODUCT}`, 'GET', '', undefined);
                setProductsList(res.products);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='product-container'>
            <p>OUR COLLECTION</p>
            <div className='product-list'>
                {productsList && productsList.map((product: any) => (
                    <div key={product.id} className='product-card'>
                        <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
                        <div className='product-info'>
                            <span className='category-tag'>{product.category}</span>
                            <h3 className='product-title'>{product.title}</h3>
                            <div className='product-footer'>
                                <span className='price'>${product.price}</span>
                                <button className='buy-button'>bUY</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
