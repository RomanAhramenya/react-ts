import { ReactNode } from "react"
import { Link, useMatch } from 'react-router-dom'
import style from './lauout.module.css'
interface ICustomLinkProps {
    to: string
    children: ReactNode

}

const CustomLink = (props: ICustomLinkProps) => {
    const { children, to } = props

    const match = useMatch(to)

    const isActive = (): string => {
        return match ? style.activeLink : ''
    }
    return (
        <Link to={to} className={isActive()}>
            {children}
        </Link>
    )
}

export default CustomLink