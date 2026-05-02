import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminAddProductForm(){

    const [productId, setProductId] = useState("");
    const [name, setName] = useState("");
    const [altNames, setAltNames] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [labelledPrice, setLabelledPrice] = useState("");
    const [images, setImages] = useState([]);
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");



    return(
        <div className="w-full h-full flex items-center flex-col">
            <div className="w-full h-[100px] bg-white shadow-2xl rounded-lg flex p-4 items-center justify-between">
                <h1 className="text-2xl font-semibold">Add New Product</h1>
                <div className="h-full gap-4 flex items-center">
                    <Link to="/admin/products" className="bg-red-600 text-white w-[100px] text-center py-2 rounded-lg">
                        Cancel
                    </Link>

                    <button className="save-btn">
                        Save
                    </button>
                </div>                
            </div>
            <div className="w-full h-[300px] p-4 flex border px-2">
                <div className="w-1/4 h-[70px] flex flex-col ">
                    <label className="font-semibold">Product ID</label>
                    <input value={productId} onChange={(e)=>setProductId(e.target.value)} className="w-full h-[40px] border rounded-lg px-2" placeholder="PD-001"/>
                </div>
                <div className="w-1/4 h-[70px] flex flex-col  px-2">
                    <label className="font-semibold">Product Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-[40px] border rounded-lg px-2" placeholder="Nvidea RTX 5090"/>
                </div>
                <div className="w-1/2 h-[70px] flex flex-col  px-2">
                    <label className="font-semibold">Alternative Names <span className="italic text-sm text-gray-400">(comma-separated)</span></label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-[40px] border rounded-lg px-2" placeholder="VGA, Graphic Card, GPU"/>
                </div>
            </div>
        </div>
    )

}