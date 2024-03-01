function Footer(){
    return(
    <>
        <div className="flex gap-90 ml-36 text-black font-bold">
         <div className="flex-column">
         <img src="biglogo.png" alt="" />
         <br />
         <div className="flex gap-8 ml-12">
            <img src="insta1.png" alt="" />
            <img src="twitter.png" alt="" />
            <img src="fb.png" alt="" />
         </div>
         </div>
         <div className="grid grid-cols-3 grid-rows-3 gap-4 text-xs">
            <div>Work With Us</div>
            <div>Private Coaching</div>
            <div>About Us</div>
            <div>Advertise With Us</div>
            <div>Our Work</div>
            <div>FAQs</div>
            <div>Support Us</div>
            <div>Our Commitment</div>
            <div>Report a Bug</div>
            <div>Business Advices</div>
            <div>Our Team</div>

         </div>
        
         </div>
         <br /><br />
         <div className="bg-customBlue h-20 p-16  gap-98 text-white flex text-xs ">
            <div>© 2023 Durand, Inc. - All Rights Reserved</div>
            <div className="flex gap-24">
            <div>Terms of use   </div>
            <div>Privacy policy </div>
            </div>
            </div>
     
        </>
    )
}
export default Footer;