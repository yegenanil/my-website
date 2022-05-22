import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;

    @media (max-width: 768px) {
        height: 1100px;
    }

    @media (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;    
    color: #fff;
    text-shadow: 0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #fff,
    0 0 80px #fff,
    0 0 120px #fff,
    0 0 160px #fff;    

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr; /* 1fr 1fr 1fr */
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.a`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    color: #101010;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    object-fit: contain;
`;

export const ProjectH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
`;