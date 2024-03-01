"use client"
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CardProduit from '../../components/CardProduit';
// import Card from '@/app/contact/components/Card';


export default function Page({params}) {
  // const { id } = useParams();
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
    <Navbar />
    <CardProduit />
    
    <div>Page n°{params.id}</div>
    <Footer />
    </div>
  );
}