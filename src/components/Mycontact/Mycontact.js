import React from "react";
import "./Mycontact.scss";
function Mycontact(){

    const formStyle = {
        padding: "10px",
        maxWidth: "400px",
        margin: "0 auto"
      };
      
      const formHeadingStyle = {
        fontSize: "40px",
        textAlign: "center",
        marginBottom: "10px",
        fontWeight: "bold"
      };
      
      const inputFieldStyle = {
        border: "1px solid #ccc",
        fontSize: "14px",
        color:"black",
        padding: "10px 8px",
        marginBottom: "10px",
        borderRadius: "5px",
        width: "100%",
        boxSizing: "border-box"
      };
      
      const buttonStyle = {
        padding: "10px",
        border: "unset",
        textTransform: "uppercase",
        backgroundColor: "#117ca6",
        color: "#ffffff",
        width: "100%",
        cursor: "pointer"
      };
      
   
    
      return (

        <div className="details__section">

<h2>Feel Free to Contact Me</h2>
<br></br>
<br></br>

         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.2527831096163!2d91.42203562578791!3d23.845155885131003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ed5f7d3e15e3%3A0x77b677ea7fdbe066!2sR.N.T%20Hostel%20NIT%20Agartala!5e0!3m2!1sen!2sin!4v1702109492374!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <React.Fragment>

      <form
       action="https://formspree.io/f/mknldvgz"
       method="POST"
        style={formStyle}
        name="contactForm"
        autoComplete="off"
      >
        <p style={formHeadingStyle}>Contact Form</p>
        {/* //name */}
        <input
          required={true}
          style={inputFieldStyle}
          type="text"
          name="name"
          placeholder="Enter your name."
        />
        {/* email */}
        <input
          required={true}
          style={inputFieldStyle}
         type="email"
          name="email"
          placeholder="Enter your email."
        />
        {/* textarea */}
        <textarea
          rows={5}
          required={true}
          style={inputFieldStyle}
          name="message"
          placeholder="Enter your message."
        ></textarea>

        {/* submit */}

          <input type="submit" value="send" style={buttonStyle}/>
     
      </form>

     
    </React.Fragment>

     </div>
      );
}
export default Mycontact;