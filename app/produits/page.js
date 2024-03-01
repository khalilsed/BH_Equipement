import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Melangeur from "../components/Melangeur";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex-column">
      <Navbar />
      <div className="flex justify-center mt-8">
        <img src="hero.png" alt="" />
      </div>
      <br />
      <div className="ml-40 flex ">
        <div className="text-customBlue font-bold ">Produit</div>
        <div> &gt;</div>
        <div className="font-bold text-customGrey">Mélangeur</div>
      </div>
      <div className="text-customBlue text-2xl ml-40 mt-4  ">Mélangeur</div>
      
      <div className="grid grid-cols-3 gap-4 mt-20 ml-auto mr-auto max-w-screen-xl ">
        <Link href="/produits/1">
        <Melangeur source="melangeur1.png" name="Melangeur1" className="mb-20" />
        </Link>
        <Link href="/produits/2">
        <Melangeur source="melangeur2.png" name="Melangeur2" className="mb-80" />
        </Link>
        <Link href="/produits/3">
        <Melangeur source="melangeur3.png" name="Melangeur3" className="mb-20" />   
        </Link>
        <Link href="/produits/4">
        <Melangeur source="melangeur4.png" name="Melangeur4" className="mb-20" />    
        </Link>
        <Link href="/produits/5">
        <Melangeur source="melangeur5.png" name="Melangeur5" className="mb-20" />    
        </Link>
        <Link href="/produits/6">
        <Melangeur source="melangeur6.png" name="Melangeur6" className="mb-20" />    
        </Link>
        <Link href="/produits/7">
        <Melangeur source="melangeur1.png" name="Melangeur7" className="mb-20" />
        </Link>
        <Link href="/produits/8">
        <Melangeur source="melangeur2.png" name="Melangeur8" className="mb-20" />
        </Link>
        <Link href="/produits/9">
        <Melangeur source="melangeur4.png" name="Melangeur9" className="mb-20" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

