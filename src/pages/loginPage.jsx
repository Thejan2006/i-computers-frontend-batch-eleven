import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiKey } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(){
        toast.success("Email: " + email + " Password: " + password)
        try{
            const res = await axios.post("http://localhost:3000/users/login",
                {
                    email : email,
                    password : password
                }
            )
            console.log(res)
        }catch(err){
            console.log(err)
            toast.error("Login Failed")
        }
        
    }
  
    return (
        <div className="w-full h-full bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat flex justify-center items-center">

            <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl shadow-white rounded-xl flex flex-col p-4">

                <h1 className="w-full h-[80px] text-center text-3xl font-bold text-white">Login</h1>

                <div className="w-full  ">
                    <label className="text-white text-lg flex items-center  gap-2"><MdEmail/> Email</label>
                    <input className="w-full h-[40px] rounded-md px-2 border border-white" type="email" placeholder="kasun@gmail.com" 
                        onChange={
                            (e)=>{
                                setEmail(e.target.value) 
                            }
                        }
                        value={email}
                        />
                </div>

                <div className="w-full  mt-5">
                    <label className="text-white text-lg flex items-center  gap-2"><BiKey/> Password</label>
                    <input
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }                       
                            type="password"
                            value={password}
                    className="w-full h-[40px] rounded-md px-2 border border-white" placeholder="•••••••••••"/>
                </div>
                <p className="w-full h-2 text-white text-right italic">Forget your password? click <Link to="/forget-password" className="font-bold text-accent">Here</Link> </p>
                <button className="w-full h-[50px] bg-accent mt-10 text-white rounded-lg" onClick={handleLogin}>Sign In</button>
                <p className="w-full h-2 text-white text-right italic ">Don't have an account? click <Link to="/register" className="font-bold text-accent">Here</Link> </p>
                <button className="w-full h-[50px] bg-secondary mt-5 text-white rounded-lg flex justify-center items-center gap-2"><BsGoogle/> Sign In with Google</button>
            </div>

        </div>
    )
}

//181800 secondary
//f4f4f4 primary
//001a84 accent