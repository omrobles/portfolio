import React, { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const initialState = {
    name: "",
    mail: "",
    content: "",
  };

  const [mail, setMail] = useState({});

  const handleChange = (event) => {
    setMail({
      ...mail,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    send("service_jk9tuur", "template_uxsg38i", mail, "nywpWqQkzCV_FggFp")
      .then((response) => {
        Swal.fire("Email send!", "Thanks for contact me. I will reply as soon I can.", "success");
      })
      .catch((err) => {
        Swal.fire(
          "Error",
          "Sorry, there is a problem to complete request. Please try to use my other channels if you want to get in touch. Thanks.",
          "error"
        );
      });
    setMail({ ...initialState });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Textarea1").value = "";
  };

  return (
    <section id="contact" className="m-0 p-5">
      <div id="form" class="container-lg">
        <h2>Contact Me</h2>
        <div class="container-sm mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            class="form-control"
            id="name"
            name="name"
          />
        </div>
        <div class="container-sm mb-3">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            required
            onChange={handleChange}
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="container-sm mb-3">
          <label for="Textarea1" class="form-label">
            Content
          </label>
          <textarea
            required
            onChange={handleChange}
            class="form-control"
            id="Textarea1"
            type="text"
            name="content"
            rows="3"
          ></textarea>
        </div>
        <button onClick={handleClick} class="btn btn-info btn-lg">
          Send
        </button>
      </div>
    </section>
  );
};

export default Contact;
