import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo"  height={30} width={180}/>
        <ul>
            {/* navlink bakalan nambah class "active" di tag li */}
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/product">
                <li>Products</li>
            </NavLink>
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
            <NavLink to="/contact">
                <li>Contact</li>
            </NavLink>
            <NavLink to="/jobs">
                <li>Jobs</li>
            </NavLink>
        </ul>
        <button onClick={() => navigate("/about")}>Get Started</button>

    </div>
  )
}

export default Navbar