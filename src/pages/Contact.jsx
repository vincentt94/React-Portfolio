import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import './Contact.css' 

export default function Contact() {
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Create a reference for the form
    const form = useRef();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
    };

    //function to validte the email format
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    //checks to see if email is valid and filled
    if(!isValidEmail(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    //checks to see if name field is filled
    if(!formData.name.trim()) {
        alert("Please enter your name.");
        return;
    }
    //checks to see if a message was entered 
    if(!formData.message.trim()) {
        alert("Please enter a message");
        return;
    } 

        emailjs
            .send(
                "service_n9fu1it",  // EmailJS Service ID
                "template_fp3ucde", // EmailJS Template ID
                templateParams,       // Reference to the form
                "9Zizfs1Lb5YS9lM1D" // Public Key
            )
            .then(
                (response) => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" }); // Clear form
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error("Error:", error);
                }
            );
    };

    return (
        <div>
            <h1 className="text-center text-primary">Contact Me</h1>
            <form ref={form} onSubmit={handleSubmit}>
                {/* This is the Name Field */}
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder = "Name"
                />
                <br></br>
                {/* This is the Email Field */}
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder ="Email"
                />
                <br></br>
                {/* This is the Message Field */}
                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    placeholder = "Please enter your message"
                />
                <br></br>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}