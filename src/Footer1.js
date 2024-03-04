import "./footer1.css"
import calllogo from "./call-logo.png"
import maillogo from "./mail-logo.png"
import instalogo from "./insta-logo.png"
import facebooklogo from "./facebook-logo.png"
import twitterlogo from "./twitter-logo.png"
import { Link } from "react-router-dom"
function Footer1()
{
    return(
        <div className="footer1">
        <h1>Contact Us :</h1><p className="p1"><Link to="tel:9009682255"><img src={calllogo}></img> +91-9009682255</Link> &nbsp;&nbsp; <Link to="mailto:chetanaleriya1037@gmail.com"><img src={maillogo}></img> chetanaleriya1037@gmail.com</Link></p>
        <div className="footer2">
        <button>Terms And Conditions</button>
        </div><br></br>
        <div className="footer3">
            <p>Follow Us On &nbsp;<Link to="https://www.instagram.com/aman_.26._?igsh=MmF5Y3Zkd25zcm5l&utm_source=qr"><img src={instalogo}></img></Link> <img src={facebooklogo}></img> <img src={twitterlogo}></img> </p>
        </div>
        </div>
    )
}
export default Footer1