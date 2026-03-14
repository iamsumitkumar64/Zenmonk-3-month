"use client"
import Image from "next/image"
import './advertise.css'

export default function AdvertiseComp() {
    return (
        <section className="section">
            <Image src="/advertise-resource/advertisement.jpg" width={980} height={194} alt="Myntra Logo" />
        </section>
    )
}
