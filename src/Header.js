import { Link } from "react-router-dom"
import "./header.css"
import logo from "./logo1.png"
function Header()
{
    return(
        <div className="header1">
            <div className="header2">
                <img src={logo} width={300} height={100}></img>
            </div>
            <div className="header3">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="courses">Courses</Link></li>
                <li><div class="dropdown">
  <div class="btn1">Syllabus
  <div class="dropdown-content"> 
  <Link to="mern">Mern full stack</Link>
  <Link to="mean">Mean full stack</Link>
  <Link to="java">Java full stack</Link>
  <Link to="python">Python full stack</Link>
  <Link to="andriod">Andriod full stack</Link>
  </div>
  </div>
</div></li>
               <li><Link to="contact">Contact</Link></li>

            </ul>
            </div>
        </div>
    )
}
export default Header