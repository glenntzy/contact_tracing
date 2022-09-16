
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSectionElements';
import {Container, Button} from '../../globalStyles'
import {Link} from 'react-router-dom'

export const InfoSection = ({
  lightBg, 
  imgStart, 
  lightTopLine, 
  lightTextDesc, 
  lightText, 
  buttonLabel, 
  description, 
  topline, 
  primary, 
  headLine,
  img,
  alt,
  start,
  lightLabel
}) => {
  
  return (
    <div>
     <InfoSec lightBg={lightBg}>
      <Container>
       <InfoRow imgStart={imgStart}>
        <InfoColumn>
         <TextWrapper>
          <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
          <Heading lightText={lightText}>{headLine}</Heading>
          <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
          <Link to="/sign-up">
           <Button big bigFont lightLabel={lightLabel}>
           {buttonLabel}
           </Button>
          </Link>
         </TextWrapper>
        </InfoColumn>
        
        
        <InfoColumn>
        <ImgWrapper start={start}>
         <Img src={img} alt={alt}/>
        </ImgWrapper>
        </InfoColumn>
       </InfoRow>
      </Container>
     </InfoSec>
    </div>
    )
  
}
