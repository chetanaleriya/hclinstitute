import  edu1 from "./edu1.jpg";
import edu2 from "./edu2.jpg";
import edu3 from "./edu3.jpg";
import "./contact.css";
import contact from "./contact1.jpg";
import Button from 'react-bootstrap/Button';

function Contact()
{
    return(
      <section class="contact-form">
        <div className="form-container1">
          <img src={contact} width="40%" height={600}></img>
        </div>
        <div class="form-container">
            <h2>Your Details</h2>
            <form action="#" method="POST">
 
                <label for="name">Name: </label>
                <input type="text" id="name" name="name"placeholder="Enter Name" required></input>
 
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="Enter Email" required></input>
 
                <label for="phone">Phone: </label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Phone No."></input>
 
                <label for="message">Message: </label>
                <textarea id="message" name="message" rows="4"  placeholder="Message"required></textarea>
 
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </div>
    </section>
 

        
      //   <div class="contact">
      //   <form >
      
      //     <label for="fname">First Name</label>
      //     <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      
      //     <label for="lname">Last Name</label>
      //     <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
      
      //     <label for="country">Country</label>
      //     <select id="country" name="country">
      //       <option value="australia">India</option>
      //       <option value="canada">Canada</option>
      //       <option value="usa">USA</option>
      //     </select>
      
      //     <label for="subject">Subject</label>
      //     <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      
      //     <input type="submit" value="Submit"></input>
      
      //   </form>
      // </div>
    )
}
export default Contact