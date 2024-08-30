import Navigation from "../Navigation/Navigation.jsx";
import { NavLink } from "react-router-dom";
import css from './Header.module.css'

export default function Header() {
    return <div className={css.container}>
        <NavLink to='/' className={css.logo}>Travel<span className={css.trucks}>Trucks</span></NavLink>
        <div className={css.navigation} >
            <Navigation/>
        </div>
    </div>
}