import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage(){

    return(
        <div className="w-full h-full ">
           

            <Link to="/admin/add-product" className="bg-accent w-[80px] h-[80px] rounded-full text-white text-2xl flex justify-center items-center fixed bottom-4 right-4 shadow-2xl hover:bg-white hover:text-accent">
                <FaPlus />
            </Link>
        </div>
    )
}