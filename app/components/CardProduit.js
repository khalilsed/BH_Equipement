import Image from 'next/image'
import React from 'react'

export default function CardProduit() {
  return (
    <div>
        <div className="flex m-auto p-10 h-auto justify-center" >
        <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
        <img className="w-96 h-96 rounded-3xl" src="melangeur1.png" alt="" />
            {/* <Image src="fb.png" alt=""  /> */}
            
        </div>
        <div className="w-96 self-stretch flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-black text-3xl font-bold font-['DM Sans']">Produit #001</div>
                <div className="w-96 text-stone-500 text-base font-medium font-['DM Sans'] leading-normal">Discover the MasterBlend Pro Dough Mixer, a perfect companion for your baking adventures. This state-of-the-art mixer combines sleek design with powerful performance, ensuring your dough is perfectly blended every time.</div>
            </div>
            <div className="self-stretch p-2 bg-zinc-200 rounded-xl justify-center items-center gap-2 inline-flex">
                <div className="text-green-600 text-sm font-bold font-['DM Sans'] leading-tight">En Stock</div>
            </div>

            <div className="w-96 h-64 relative">
            {/* <img className="w-44 h-28 left-0 top-0 absolute rounded-2xl border border-gray-300" src="https://via.placeholder.com/173x110" />
            <img className="w-44 h-28 left-[205px] top-0 absolute rounded-2xl border border-gray-300" src="https://via.placeholder.com/173x110" />
            <img className="w-44 h-28 left-0 top-[144px] absolute rounded-2xl border border-gray-300" src="https://via.placeholder.com/173x110" />
            <img className="w-44 h-28 left-[205px] top-[144px] absolute rounded-2xl border border-gray-300" src="https://via.placeholder.com/173x110" /> */}
            </div>
        </div>
        </div>
    </div>
  )
}
