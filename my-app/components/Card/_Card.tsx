import Image from 'next/image'
import {Background, CardStyle} from './_Card-style'
import {H1, P} from '../../styles/typography'


function Card(props) {
    return (
        <>
            <CardStyle className='row middle-xs center-xs'>
                <div className='col-xs-4'>
                    <Image
                    src={props.src}
                    alt="Picture of the author"
                    width={props.width}
                    height={props.height}
                    />
                </div>
                <div className='col-xs-8'>
                    <H1 color='#0C2634'>{props.number}</H1>
                    <P>{props.text}</P> 
                </div>
            </CardStyle>
            <Background>
            </Background>
        </>
        
    )
  }
  
  export default Card
