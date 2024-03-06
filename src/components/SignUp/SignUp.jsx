import logo from '../images/logo.png'
import back from "../images/back.png"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import "../../firebase/config"

const SignUp = () => {

    const [eye1, setEye1] = useState(false)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    function eyes1() {
        setEye1(prev => !prev)
    }

    function handleSubmit(e) {
        e.preventDefault()
        signInWithEmailAndPassword(getAuth(), email, pass).then(() => alert("Loginned has been successfully"))
            .catch(() => alert("Something went wrong"))
    }



    return (
        <div className=' screen-main shadow-[0_0_500px_0px_red] flex mt-1 rounded-[10px] w-[1100px] h-[620px] mx-auto '>
            <img className=' back rounded-r-full w-[677.5px] ' src={back} alt="Nature" />
            <form onSubmit={handleSubmit} className=' w-[100%] h-[620px] p-[30px] '>
                <img className=' w-[140px] ' src={logo} alt="" />
                <h3 className=' font-bold text-[20px] mt-9 '>Nice to see you again</h3>
                <label className=' relative top-[30px] '>
                    <span className=' text[18px] font-semibold text-neutral-700 '>Login</span> <br />
                    <input onChange={(e) => setEmail(e.target.value)} className=' bg-slate-200 mt-3 w-[100%] h-[45px] rounded-[10px] pl-3 outline-none font-semibold ' type="text" placeholder='youremail@gmail.com' />
                </label>
                <label className=' relative top-[50px] '>
                    <span className='text[18px] font-semibold text-neutral-700'>Password</span> <br />
                    <input onChange={(e) => setPass(e.target.value)} className=' bg-slate-200 mt-3 w-[100%] h-[45px]  rounded-[10px] pl-3 outline-none font-semibold ' type={eye1 ? "text" : "password"} placeholder='xxxxxxxxxx' />
                    <i onClick={eyes1} className={` p-0 right-[20px] text-blue-700 cursor-pointer  top-[47px] text-[20px] fa-solid ${eye1 ? "fa-eye" : "fa-eye-slash"} absolute m-0 `}></i>
                </label>

                <button className=' w-[100%] h-[45px] bg-blue-600 text-white font-bold rounded-[10px] hover:bg-blue-800 mt-[80px] '>Login</button>

                <p className=' text-center mt-4 font-semibold opacity-[0.8] '>Dont't have account <Link className=' text-blue-500 ' to="/login">Sign up now</Link></p>
            </form>
        </div>
    )
}

export default SignUp

