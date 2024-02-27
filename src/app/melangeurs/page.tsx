"use client";
import Product from "@/models/Products";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href="/melangeurs/[slug]" as={`/melangeurs/${product.slug}`}>
      <div className="flex flex-col gap-4 border-[1px] border-[#D4D2E3] rounded-3xl px-4 py-6 hover:scale-[101%] app_transition cursor-pointer">
        <img
          src={
            // process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            // "/api/" +
            product.images[0]
          }
          alt={product.name}
        />
        <h3 className="font-bold text-xl text-primary">{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </Link>
  );
};

const Melangeurs: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      _id: "",
      name: "Produit Exemple",
      slug: "example-product",
      description: "Description du produit exemple.",
      category: "Mélangeurs",
      images: [
        "https://cdn.ready-market.com.tw/5dbde277/Templates/pic/23132_600x600.png?v=65b62ef3",
      ],
      stock: "available",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/products/all"
        );
        setProducts(
          response.data.filter(
            (product: Product) => product.category === "Mélangeurs"
          )
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">Mélangeurs</h1>
        <p className="text-sm md:text-base">
          Optimisez votre expérience de pâtisserie avec nos mélangeurs
          professionnels de pâte.
        </p>
      </section>
      <section className="flex flex-col py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">Produits</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">Mélangeurs</span>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-8">
            <p>Chargement des produits...</p>
            <RotatingLines
              visible={true}
              width="60"
              strokeColor="#ef3a47"
              strokeWidth="3"
              animationDuration="2"
            />
          </div>
        ) : products.length === 0 ? (
          <p>
            Aucun produit de la catégorie "Mélangeur" disponible pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Melangeurs;
