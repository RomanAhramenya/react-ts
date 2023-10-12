import { ReactNode } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
interface IRequireAuthProps {
    children: ReactNode
}

const RequireAuth = (props: IRequireAuthProps) => {
    const { children } = props
    const auth = false
    const location = useLocation()

    if (!auth) return <Navigate to='/login' state={{ from: location }} />
    return children

}

export default RequireAuth