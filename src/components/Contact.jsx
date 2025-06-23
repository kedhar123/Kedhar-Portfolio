import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_rwdsu8e',
      'template_4xtiuph',
      {
        from_name: form.name,
        to_name: 'kedhar Bhoomani',
        from_email: form.email,
        to_email: 'bkedhar@gmail.com',
        message: form.message,
      },
      '1rhwAjjTZejp6XKzn'
    )
      .then(() => {
        setLoading(false);
        alert('Thank You for Contacting , I will get back to you soon');

        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Their is in error in sending mail,please try again later,Thank You");
      });
  }

  return (
    <div className="xl:mt-12 xl:flew-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>For More Details</p>
        <p className={styles.sectionHeadText}>Contact Me</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter The Message"
              className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="self-center bg-white py-4 px-8 outline-none w-fit text-black font-bold shadow-md   rounded-xl"
          >
            {loading ? "..sending" : "send"}
          </button>
        </form>

      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact");