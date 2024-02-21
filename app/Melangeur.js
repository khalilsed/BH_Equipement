function Melangeur(props){
    const { source, name } = props;
    return(
        <div className="mb-20 flex-column w-284 h-422">
          <img className="" src={source} alt="" />
          <h3 className="text-black text-sm font-bold">{name}</h3>
          <p className="text-customGrey text-xs">Melangeur</p>
        </div>
    )
}
export default Melangeur;