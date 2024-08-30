import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'

export default function Navigation() { 
    return <nav className={css.nav}>
         <NavLink
                to="/"
                className={({ isActive }) => isActive ? css.active : css.link} end
            >
                Home
            </NavLink>
            <NavLink
                to="/catalog"
                className={({ isActive }) => isActive ? css.active : css.link} end
            >
                Catalog
            </NavLink>
    </nav>
}