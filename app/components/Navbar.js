"use-client"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="  bg-customBlue text-white flex gap-40 p-2">
          {/* <Link href=""> */}
         <img className="ml-20" height={50} width={50} src="logo.png" alt="hello" />
        {/* </Link>   */}
          {/* <Link href=""> */}
         <div className="mt-4">Accueil</div>
        {/* </Link>   */}
          {/* <Link href="/produits"> */}
         <div className="mt-4">Produits</div>
        {/* </Link>   */}
          {/* <Link href="/contact"> */}
         <div className="mt-4">Contacts</div>
        {/* </Link>   */}
          {/* <Link href="/a-propos"> */}
         <div className="mt-4">A Propos</div>
        {/* </Link>   */}
         <img className="ml-36" src="language.png" alt="" />
        
        </div>
        
    )
}
export default Navbar