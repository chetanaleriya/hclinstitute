import "./courses.css"
import mern from "./mern.png"
import mean from "./mean.jpeg"
import java from "./java.jpeg"
import python from "./python.jpeg"
import andriod from "./android.jpeg";
import ios1 from "./ios1.png"
import { Link } from "react-router-dom"
function Courses()
{
    return(
        <div>
          <div className="wrapper">
           <div className="card" style={{height:"200px"}}>
            <img src={mern}></img>
            <div className="info">
              <h1>MERN Full Stack</h1>
              <Link to="mern" className="btn">View Detail</Link>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={mean}></img>
            <div className="info">
              <h1>MEAN Full Stack</h1>
              <Link to="mean" className="btn">View Detail</Link>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={java} ></img>
            <div className="info2">
              <h1>JAVA Full Stack</h1>
              <Link to="java" className="btn">View Detail</Link>
            </div>
           </div>
        </div>
        <div className="wrapper">
           <div className="card" style={{height:"200px"}}>
            <img src={python}></img>
            <div className="info">
              <h1>Python Full Stack</h1>
              <Link to="python" className="btn">View Detail</Link>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={andriod}></img>
            <div className="info1">
              <h1>Android</h1>
              <Link to="andriod" className="btn">View Detail</Link>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={ios1} ></img>
            <div className="info3">
              <h1>IOS</h1>
              <Link to="ios" className="btn">View Detail</Link>
            </div>
           </div>
        </div>
        </div>
    )
}
export default Courses
// import { CRow } from "@coreui/react"
// import { CCol } from "@coreui/react"
// import { CCard } from "@coreui/react"
// import { CCardImage } from "@coreui/react"
// import { CCardBody } from "@coreui/react"
// import { CCardText } from "@coreui/react"
// import { CCardTitle } from "@coreui/react"
// import mern from "./mern.png"
// import mean from "./mean.jpeg"
// import java from "./java.jpeg"
// import python from "./python.jpeg"
// import andriod from "./android.jpeg";
// import ios1 from "./ios1.png"
// import "./courses.css"
// import { Link } from "react-router-dom"
// function Courses()
// {
//     return(
//         <div className="courses">
//             <br></br>
//             <br></br>
            
//             <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
//              <CCol xs>
//              <CCard className="h-50">
//              <Link to="mern"><CCardImage orientation="top" src={mern}  /></Link>
//       {/* <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This content is a little bit longer.
//         </CCardText>
//       </CCardBody> */}
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-50">
//       <Link to="mean">
//       <CCardImage orientation="top" src={mean} height={242}/></Link>
//       {/* <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This card has supporting text below as a natural lead-in to additional content.
//         </CCardText>
//       </CCardBody> */}
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-50">
//       <CCardImage orientation="top" src={java} height={242}/>
//        {/*<CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This card has even longer content than the first to show that equal height
//           action.
//         </CCardText>
//       </CCardBody> */}
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-50">
//       <CCardImage orientation="top" src={python} height={242} />
//       {/* <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This content is a little bit longer.
//         </CCardText>
//       </CCardBody> */}
//     </CCard>
//   </CCol>
//   <CCol xs>
//     <CCard className="h-50">
//       <CCardImage orientation="top" src={andriod} height={242} />
//       {/* <CCardBody>
//         <CCardTitle>Card title</CCardTitle>
//         <CCardText>
//           This is a wider card with supporting text below as a natural lead-in to additional
//           content. This content is a little bit longer.
//         </CCardText>
//       </CCardBody> */}
//     </CCard>
//   </CCol>
 
// </CRow>
// <br></br>
// <br></br>

//         </div>
//     )
// }
// export default Courses