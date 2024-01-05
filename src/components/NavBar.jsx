import { Link } from "react-router-dom"; 
import Logo from "../img/Logo.png"
import "../index.css";
export default function NavBar () {
  return (
    <div className="navbar-div">
        <img src={Logo} alt="Logo" className="logo"/>
        <ul className="ul-nav">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/quiz">Quiz</Link>
        </li>
        <li>
            <Link to="/monthlyreport">Monthly Report</Link>
        </li>
        <li>
            <Link to="/joinnow" className="join-now-button">Join Now</Link>
        </li>
        </ul>
    </div>
  );
}