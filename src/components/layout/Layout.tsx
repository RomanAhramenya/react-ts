import { NavLink, Outlet } from 'react-router-dom'
import style from './lauout.module.css'
import CustomLink from './CustomLink'
const Layout = () => {
    return (
        <div className={style.wrapper}>
            <header>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
            </header>
            <div className={style.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
