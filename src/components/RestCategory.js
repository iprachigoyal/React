
import ItemList from "./ItemList";

const RestCategory =({data, showItems, setShowIndex})=>{
    const handleClick=()=>{
        setShowIndex();
    }
    
    return(
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                

                {showItems && <ItemList items={data.itemCards}/>}
            </div>
            {/* Accoridan body */}

            
        </div>
    )
}

export default RestCategory;
