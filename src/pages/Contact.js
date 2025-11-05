import React from "react";
 function Contact() {
  function sendMessage() { 
    alert("Thank you! We’ll contact you soon ✅");
  }

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={sendMessage}>
        <input type="text" placeholder="Your Name" required />
        <br />
        <input type="email" placeholder="Your Email" required />
        <br />
        <textarea placeholder="Your Message" required></textarea>
        <br />
        <button type="submit">Send</button>
        <br />
      </form>
    </div>
  );
}

export default Contact;
