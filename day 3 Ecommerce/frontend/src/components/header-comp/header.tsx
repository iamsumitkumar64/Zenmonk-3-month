"use client"
import Image from "next/image"
import './header.css'

export default function HeaderComp() {
    return (
        <header className="header">
            {/* Website Logo */}
            <div className="left-container">
                <Image src="/header-resource/myntra-logo-icon.png" width={53} height={36} alt="Myntra Logo" />

                {/* Menu Bar */}
                <nav className="menu-bar">
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>KIDS</p>
                    <p>HOME</p>
                    <p>BEAUTY</p>
                    <p>STUDIO <b>New</b></p>
                </nav>
            </div>

            {/* Side Options */}
            <div className="right-container">
                {/* Search Bar */}
                <div className="search">
                    <Image src="/header-resource/search-icon.png" width={15} height={15} alt="Profile" />
                    <input type="text" placeholder="Search for products, brands and more" />
                </div>
                <div className="option-div">
                    <div className="option">
                        <Image src="/header-resource/profile-icon.png" width={20} height={20} alt="Profile" />
                        <p>Profile</p>
                    </div>
                    <div className="option">
                        <Image src="/header-resource/whitelist-icon.png" width={20} height={20} alt="Wishlist" />
                        <p>Wishlist</p>
                    </div>
                    <div className="option">
                        <Image src="/header-resource/bag-icon.png" width={20} height={20} alt="Bag" />
                        <p>Bag</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
