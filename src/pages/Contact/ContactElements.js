import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #010606;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    playbackRate: 0.5;
`;

export const ContactWrapper = styled.div`
    text-align: center; 
    width: 550px;
    height: 550px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 3;
`;

export const ContactTitle = styled.h1`
    padding-top: 20px;
    margin-bottom: 30px;
    color: #232a34;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactNameInput = styled.input`
    width: 350px;
    font-size: 15px;
    padding: 10px;
    margin: 10px;      
    border-radius: 10px;
    border: none;
`;

export const ContactEmailInput = styled.input`
    width: 350px;
    font-size: 15px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 10px;
`;

export const ContactMessageInput = styled.textarea`
    width: 350px;
    height: 150px;
    font-size: 14px;
    padding: 10px;
    margin: 10px;
    border: none;  
    border-radius: 10px;
`;

export const ContactSubmitButton = styled.button`
    width: 350px;
    height: 35px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    padding: auto;
    color: grey;
    transition: all 0.4s ease-in-out;

    :hover {
        transition: all 0.5s ease-in-out;;   
        background-color: #232a34;
        color: white;
        border: 1px solid #fff;
    }
    
`;

export const BackButton = styled.button`
    margin-top: 10px;
    width: 350px;
    height: 35px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    padding: auto;
    color: grey;
    transition: all 0.4s ease-in-out;

    :hover {
        transition: all 0.5s ease-in-out;;   
        background-color: #232a34;
        color: white;
        border: 1px solid #fff;
    }
`;

