import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Video1 from '../../videos/video4.mp4';
import {
  BackButton, ContactContainer, ContactEmailInput, ContactForm,
  ContactMessageInput,
  ContactNameInput, ContactSubmitButton, ContactTitle, ContactWrapper, HeroBg, VideoBg
} from "./ContactElements";


const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xckdkeo', 'template_yz5ybs4', e.target, '4mlqX3jMoZYwUPRW3');
    toast.success('Message sent successfully! You are being redirected to the home page', {
      position: toast.POSITION.TOP_CENTER,
    })

    setTimeout(() => {
      navigate('/');
    }, 6000);
  }

  const handleBackButtonClick = () => {
    navigate('/');
  }

  return (
    <>
      <ContactContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video1} type='video/mp4' />
        </HeroBg>
        <ContactWrapper>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactForm ref={form} onSubmit={formSubmit}>
            <ContactNameInput name="name" required type="text" placeholder="Name" />
            <ContactEmailInput name="user_email" required type="email" placeholder="E-Mail" />
            <ContactMessageInput name="message" required placeholder="Your message" />
            <ContactSubmitButton type="submit">Submit</ContactSubmitButton>
            <ToastContainer />
            <BackButton type="button" onClick={handleBackButtonClick}>Back</BackButton>
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Contact