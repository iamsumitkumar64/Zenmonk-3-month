"use client"

import AdvertiseComp from "@/components/advertise-comp/advertise";
import HeaderComp from "@/components/header-comp/header";
import SmartPhoneComp from '@/components/category/smart-phone-comp/smart_phone';
import SliderComp from "@/components/slider-comp/slider";
import AllProductsComp from "@/components/all-products-comp/all_products";
import FooterComp from "@/components/footer-comp/footer";

export default function Home() {

  return (
    <>
      <HeaderComp />
      <AdvertiseComp />
      <SliderComp />
      <AllProductsComp />
      <SmartPhoneComp />
      <FooterComp />
    </>
  );
}
