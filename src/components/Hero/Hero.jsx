import css from './Hero.module.css'
import heroImg from '../../images/Hero.jpg'
import { NavLink } from 'react-router-dom'

export default function Hero() {
    return <div className={css.container} style={{ backgroundImage : `url(${heroImg})`, backgroundRepeat: 'no-repeat'}}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}>You can find everything you want in our catalog</h2>
       <NavLink
                to="/catalog" className={css.link}>View Now</NavLink>
    </div>
}