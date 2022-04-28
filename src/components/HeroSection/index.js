import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH4, HeroP } from './HeroElements';
import Video from '../../videos/video.mp4';


const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, my name is</HeroH1>
                <HeroH4 data-splitting className="rainbow-it">Anıl Yeğen</HeroH4>
                <HeroP>I build things for the web. I enjoy building everything from small
                    business sites to rich interactive web apps</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection