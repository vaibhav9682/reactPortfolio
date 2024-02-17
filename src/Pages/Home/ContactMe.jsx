import { useState } from "react";
import axios from "axios";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    chooseTopic: "Select One...",
    message: "Type your message...",
    checkbox: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);
  };

  const handleTextareaFocus = () => {
    // Clear the message placeholder text on focus
    if (formData.message === "Type your message...") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        message: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    console.log(formData);
    try {
      await axios.post("https://emailsender-c5rb.onrender.com", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        chooseTopic: "Select One...",
        message: "Type your message...",
        checkbox: false,
      });

      alert("Email sent successfully!");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
        Connect with us for any query or assistance – we're just a message away!
        </p>
      </div>
      <form
        className="contact--form--container"
        id="formDataId"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="chooseTopic"
            value={formData.chooseTopic}
            onChange={handleChange}
          >
            <option>Select One...</option>
            <option>Want to hire</option>
            <option>Want to collaborate</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            onFocus={handleTextareaFocus}
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input
            // value={formData.checkbox}
            onChange={handleChange}
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            checked={formData.checkbox}
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          {isSubmitting ? (
            <p>Sending message... Please wait.</p>
          ) : (
            <button className="btn btn-primary contact--form--btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
