import { useContext } from "react";
import { AuthContext , AuthContextType } from "../providers/AuthProvider";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
import { ProjectsListPage } from "../pages/projectListPage/ProjectsListPage";

export const Routing = () => {
    const { isAuth } = useContext(AuthContext) as AuthContextType;
    return (
        <main>
            <Routes>
                <Route element={<ProtectedRoute isAllowed={!isAuth} redirectPath={'/login'}/>}>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                </Route>
                <Route path='/' element={<ProjectsListPage/>}/>
            </Routes>
        </main>
    )
}