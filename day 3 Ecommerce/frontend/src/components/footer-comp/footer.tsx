"use client"
import Image from 'next/image'
import './footer.css'

export default function FooterComp() {
    return (
        <footer>
            <div className="footer">
                <div>
                    <h2>Online Shopping</h2>
                    <div>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Home</p>
                        <p>Beauty</p>
                    </div>
                </div>
                <div>
                    <h2>Customer Policies</h2>
                    <div>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                        <p>T&C</p>
                        <p>Term of Use</p>
                        <p>Track Orders</p>
                        <p>Shipping</p>
                        <p>Cancellation</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <h2>EXPERIENCE MYNTRA APP ON MOBILE</h2>
                    <div className='img'>
                        <Image src="/footer-resource/app-store-icon.png" width={100} height={100} alt="Profile" />
                        <Image src="/footer-resource/play-store-icon.png" width={100} height={100} alt="Profile" />
                    </div>
                </div>
                <div>
                    <h2>Useful Links</h2>
                    <div>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Site Map</p>
                        <p>Corporate Information</p>
                        <p>Whitehat</p>
                        <p>Cleartrip</p>
                        <p>Myntra Global</p>
                    </div>
                </div>
                <div className="custom-border">
                    <h2>Popular Links</h2>
                    <div>
                        <p> Makeup</p>
                        <p>Dresses For Girls</p>
                        <p>T-Shirts</p>
                        <p>Sandals</p>
                        <p>Headphones</p>
                        <p>Babydolls</p>
                        <p>Blazers For Men</p>
                        <p>
                            Handbags</p>
                        <p>
                            Ladies Watches</p>
                        <p>
                            Bags</p><p>
                            Sport Shoes</p><p>
                            Reebok Shoes</p><p>
                            Puma Shoes</p><p>
                            Boxers</p><p>
                            Wallets</p><p>
                            Tops</p><p>
                            Earrings</p><p>
                            Fastrack Watches</p><p>
                            Kurtis</p><p>
                            Nike</p><p>
                            Smart Watches</p><p>
                            Titan Watches</p><p>
                            Designer Blouse</p><p>
                            Gowns</p><p>
                            Rings</p><p>
                            Cricket Shoes</p><p>
                            Forever 21</p><p>
                            Eye Makeup</p><p>
                            Photo Frames</p><p>
                            Punjabi Suits</p><p>
                            Bikini</p><p>
                            Myntra Fashion Show</p><p>
                            Lipstick</p><p>
                            Saree</p><p>
                            Watches</p><p>
                            Dresses</p><p>
                            Lehenga</p><p>
                            Nike Shoes</p><p>
                            Goggles</p><p>
                            Bras</p><p>
                            Suit</p ><p>
                            Chinos</p ><p>
                            Shoes</p ><p>
                            Adidas Shoes</p ><p>
                            Woodland Shoes</p ><p>
                            Jewellery</p ><p>
                            Designers Sarees</p >
                    </div>
                </div >
            </div >
            <div>
                <p>In case of any concern, Contact Us</p>
                <p>© 2026 www.myntra.com. All rights reserved.</p>
                <p>A Flipkart company</p>
            </div>
        </footer >
    )
}
