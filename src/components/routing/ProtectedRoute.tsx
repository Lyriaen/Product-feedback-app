import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRouteType = {
    isAllowed: Boolean,
    redirectPath: string,
}

export const ProtectedRoute = ({ isAllowed, redirectPath = '/' }: ProtectedRouteType) => {
    return isAllowed ? <Outlet /> : <Navigate to={redirectPath} />
}