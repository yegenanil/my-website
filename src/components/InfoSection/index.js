import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SubTitle, TextWrapper, TopLine } from "./InfoElements"
import img2 from '../../images/img2.svg';

const InfoSection = ({ lightBg, id, imgStart, topline, lightText, headline, darkText, description, img, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                {/* <Heading lightText={lightText}>{headline}</Heading> */}
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img2} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection