import logo from '../images/logo.png'
import back from "../images/back.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import "../../firebase/config";

const Login = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [eye, setEye] = useState(false)

    function signUpHandler(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(() => alert("Account has been created successfully"))
            .catch((err) => alert(err.error))
    }



    function show() {
        setEye(prev => !prev)
    }


    return (
        <div className=' screen-main shadow-[0_0_500px_0px_red] flex mt-1 rounded-[10px] w-[1100px] h-[620px] mx-auto '>
            <form onSubmit={signUpHandler} className=' w-[100%] h-[620px] p-[30px] '>
                <img className=' w-[140px] ' src={logo} alt="" />
                <h3 className=' font-bold text-[20px] mt-9 '>Nice to see you again</h3>
                <label className=' relative top-[30px] '>
                    <span className=' text[18px] font-semibold text-neutral-700 '>Username</span> <br />
                    <input required className=' bg-slate-200 mt-3 w-[100%] h-[45px] rounded-[10px] pl-3 outline-none font-semibold ' type="text" placeholder='John Raider' />
                </label>
                <label className=' relative top-[50px] '>
                    <span className=' text[18px] font-semibold text-neutral-700 '>Email</span> <br />
                    <input required onChange={(e) => setEmail(e.target.value)} className=' bg-slate-200 mt-3 w-[100%] h-[45px] rounded-[10px] pl-3 outline-none font-semibold ' type="text" placeholder='youremail@gmail.com' />
                </label>
                <label className=' relative top-[70px] '>
                    <span className='text[18px] font-semibold text-neutral-700'>Password</span> <br />
                    <input required onChange={(e) => setPassword(e.target.value)} className=' bg-slate-200 mt-3 w-[100%] h-[45px] rounded-[10px] pl-3 outline-none font-semibold ' type={eye ? "text" : "password"} placeholder='xxxxxxxxx' />
                    <i onClick={show} className={`fa-solid ${eye ? "fa-eye" : "fa-eye-slash"} absolute right-[20px] text-[20px] top-[47px] text-blue-700 cursor-pointer`}></i>
                </label>

                <button className=' w-[100%] h-[45px] bg-blue-600 text-white font-bold rounded-[10px] hover:bg-blue-800 mt-[90px] '>Sign up</button>

                <p className=' text-center mt-4 font-semibold opacity-[0.8] '>Do yo have alrady account <Link className=' text-blue-500 ' to="/">Login now</Link></p>
            </form>
            <img id='back' className=' rounded-l-full w-[677.5px] ' src={back} alt="Nature" />
        </div>
    )
}

export default Login