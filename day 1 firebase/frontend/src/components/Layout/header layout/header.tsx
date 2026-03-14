"use client"

import Link from "next/link";
import './header.css'

export default function HeaderComponent() {
    return (
        <span className="header">
            <button color="secondary">
                <Link href={"/"}>
                    Home Page
                </Link>
            </button>
            <button color="secondary">
                <Link href={"/login"}>
                    Login Page
                </Link>
            </button>
            <button color="secondary">
                <Link href={"/register"}>
                    Register Page
                </Link>
            </button>
        </span>
    );
}