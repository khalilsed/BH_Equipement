function Melangeur(props){
    const { source, name } = props;
    return(
        <div className="mb-20 flex flex-col shadow-xl p-10 rounded-2xl border-rad cursor-pointer hover:opacity-70 transition duration-300">
          <img className="m-auto mb-5 " src={source} alt="" />
          <h3 className="text-black text-sm font-bold">{name}</h3>
          <p className="text-customGrey text-xs">Melangeur</p>
        </div>
    )
}
export default Melangeur;