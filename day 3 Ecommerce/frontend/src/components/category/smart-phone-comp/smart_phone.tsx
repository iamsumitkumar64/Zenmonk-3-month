
"use client"
import './smart_phone.css'
import { useEffect, useState } from "react"
import { ApiCallService } from "../../../services/http"
import Image from 'next/image';

export default function SmartPhoneComp() {
    const [productsList, setProductsList] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            let res = await ApiCallService(`${process.env.NEXT_PUBLIC_SMART_PHONES_CATEGORY}`, 'GET', '', undefined);
            setProductsList(res.products);
        }
        fetchData();
    }, [])

    return (
        <div className='phone_container'>
            <p>SMART PHONE CATEGORY</p>
            <div className='product-list'>
                {Array.isArray(productsList) && productsList.map((product, index) => (
                    <div key={index}>
                        <Image src={product.thumbnail} width={100} height={100} alt={`Slider ${product.title}`} />
                        <p className='title'>{product.title}</p>
                        <p className='description'>{product.description}</p>
                        <button className='buy-button'>bUY</button>
                    </div>
                ))}
            </div>
        </div >
    )
}