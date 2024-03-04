import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"
// import Product from "./Product"
// import Login from "./Login"
// import "./routing.css"
// import Electronics from "./Electronics"
// import Womens from "./Womens"
// import Mens from "./Mens"
// import Jwellery from "./Jwellery"
import Map from "./Map"
import Mern from "./Mern"
import Mean from "./Mean"
import Courses from "./Courses"
import AllCourses from "./AllCourses"
import Contact from "./Contact"
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Java from "./Java"
import Python from "./Python"
import Andriod from "./Andriod"
// import Register from "./Register"
// import Details from "./Details"

function Routing()
{
    return(
        <div className="routing">
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="mern" element={<Mern></Mern>}></Route>
            <Route path="mean" element={<Mean></Mean>}></Route>
            <Route path="java" element={<Java></Java>}></Route>
            <Route path="python" element={<Python></Python>}></Route>
            <Route path="andriod" element={<Andriod></Andriod>}></Route>
             <Route path="about" element={<About></About>}></Route>
             <Route path="courses" element={<Courses></Courses>}></Route>
             <Route path="contact" element={<Contact></Contact>}></Route>
             <Route path="courses/mern" element={<Mern></Mern>}></Route>
             <Route path="courses/mean" element={<Mean></Mean>}></Route>
             <Route path="courses/java" element={<Java></Java>}></Route>
             <Route path="courses/python" element={<Python></Python>}></Route>
             <Route path="courses/andriod" element={<Andriod></Andriod>}></Route>
            {/* <Route path="Product" element={<Product></Product>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="Login" element={<Login></Login>}></Route>
           
            <Route path="Womens" element={<Womens></Womens>}></Route>
            <Route path="Mens" element={<Mens></Mens>}></Route>
            <Route path="details" element={<Details></Details>}></Route>
            
            <Route path="Jwellery" element={<Jwellery></Jwellery>}></Route>*/}
       
        
                 </Routes>
                 
                 <Map></Map>
                 {/* <Footer1></Footer1> */}
                 <Footer2></Footer2>
        <Footer></Footer>

        </BrowserRouter>
        </div>
    )
}
export default Routing