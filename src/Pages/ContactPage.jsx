import React, { useState, useRef } from 'react'
import ContactImg from '../components/ContactImg'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'
import { firestoreDB } from '../firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const submitMessage = async (data) => {
    setLoading(true);
    try {
      const messageCollection = collection(firestoreDB, "messages");
      await addDoc(messageCollection, data);


      emailjs
        .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
          name: data.fullName,
          message: data.message,
          email: data.email,
          phoneNum: data.phoneNum
        }, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success('Thank you for your message. Please allow up to 24 hours for a response.');
            setLoading(false);
          },
          (error) => {
            toast.failed("Failed to send message", error.text);
            setLoading(false);
          },
        );
    } catch (error) {
      setLoading(false);
      toast.failed('Failed to send message. Please try again later');
    }


  }
  return (
    <div className='w-screen bg-secondary' id='contact'>
      <div className='container mx-auto  p-8 flex flex-col items-center
        lg:px-[100px]'>
        <div className='flex mt-8 gap-8 flex-col items-center
            md:flex-row'>
          <ContactImg />
          <ContactDetails />
        </div>

        <ContactForm formData={submitMessage} ref={form} />
      </div>
      {loading && <div className='fixed bg-[rgba(0,0,0,0.7)] inset-0 z-[999]'>
        <Spinner />
      </div>}

    </div>
  )
}

export default ContactPage