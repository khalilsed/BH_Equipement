function Navbar(){
    return(
        <div className="  bg-customBlue text-white flex gap-40 p-2">
            <img className="ml-20" height={50} width={50} src="logo.png" alt="" />
         <div className="mt-4">Accueil</div>
         <div className="mt-4">Produits</div>
         <div className="mt-4">Contacts</div>
         <div className="mt-4">A Propos</div>
         <img className="ml-36" src="language.png" alt="" />
        
        </div>
    )
}
export default Navbar