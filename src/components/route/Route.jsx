import { Routes, Route } from "react-router-dom"
import SignUp from "../SignUp/SignUp"
import Login from "../Login/Login"

const RouteElement = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default RouteElement