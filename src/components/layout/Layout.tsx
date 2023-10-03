import { Link, Outlet } from 'react-router-dom'
import style from './lauout.module.css'
const Layout = () => {
    return (
        <div className={style.wrapper}>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
            </header>
            <div className={style.outlet}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
