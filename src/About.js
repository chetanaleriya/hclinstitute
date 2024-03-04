import about from "./aboutus.png"
import "./about.css"
function About()
{
 return(
  <div className="about3">
    
    <h1>About The Institution</h1>
    
    <div className="about">
        <div className="about1">
            <img src={about} width="60%" height="100%"></img>
        </div>
        <div className="about2">
            <p>Higher Coding Language(HCL) holds expertise in providing IT training services & IT Recruitment
                 to college students and company employees in Indore since 2022. Higher Coding Language(HCL) 
                  provides intense training programs for aspiring job-seekers and corporate's to help them 
                  further learn and enhance their technical skill sets. Higher Coding Language(HCL) is the
                   best place for students to develop their programming abilities in different technologies. 
                   A dedicated team of professional trainer's, with their technical expertise, can help student's
                    get to a point of prowess which cannot be matched by most colleges and institutions.
</p>
<br></br>
<br></br>
<p>The training is provided by professionals and corporate faculties holding ample training experience,
     to guide students with the work culture of most IT companies. Training module is accompanied by 
     live project experience and placement assistance which makes the candidates ready to be absorbed
      in the industry. Higher Coding Language(HCL) takes up the responsibility of placing all its students
       at attractive packages in companies all over India.
</p>
<br></br>
<br></br>
<p>
Higher Coding Language(HCL) has been the trusted placement partner for companies both top notch and 
middle tier. Higher Coding Language(HCL) is always to do effort scratch to 100%.What this means for
 students and companies is that Higher Coding Language(HCL) is a mark of quality and no compromises
  are made in rendering services availed for at Higher Coding Language(HCL).

</p>
        </div>

    </div>
  </div>
 )
}
export default About