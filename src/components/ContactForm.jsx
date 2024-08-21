import React, { forwardRef, useState } from "react";
import { IoSend } from "react-icons/io5";

const ContactForm = forwardRef(({ formData }, ref) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();

    const now = new Date();
    const option = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timezone: "Asia/Manila",
    };

    const dateAndTime = now.toLocaleString("en-PH", option);

    const data = {
      fullName: firstName + " " + lastName,
      email,
      phoneNum,
      message,
      dateSubmitted: dateAndTime,
    };

    formData(data);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNum("");
    setMessage("");
  };
  return (
    <div className="max-w-[700px] my-8">
      <div className="text-white text-xl my-4">
        Let me get to know you better
      </div>
      <form onSubmit={submitMessage} className="w-full" ref={ref}>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="name"
            id="firstName"
            type="text"
            placeholder="First name"
            className="w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF]"
          />
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            type="text"
            placeholder="Last name"
            className="w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF]"
          />
        </div>
        <input
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email"
          className="w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2"
        />
        <input
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          id="phoneNumber"
          type="phoneNumber"
          placeholder="Phone number (Optional)"
          className="w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2"
        />
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Message"
          rows={4}
          className="w-full  border-2 p-4 rounded-lg  focus:border-[#00B2FF] focus:outline-none hover:border-[#00B2FF] my-2"
        />
        <button
          type="submit"
          className="group my-2 text-white bg-tertiary px-6 py-4 rounded-lg flex items-center hover:bg-[#37a1cf]  "
        >
          <span>Send message</span>
          <IoSend className="ml-4 text-xl group-hover:translate-x-2  transition-transform duration-500 ease-in-out" />
        </button>
      </form>
    </div>
  );
});

export default ContactForm;
