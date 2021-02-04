import Image from 'next/image'
import {Background, CardStyle} from './_Card-style'

function Card(props) {
    return (
        <>
            <CardStyle className='row middle-xs center-xs'>
                <div className='col-xs-4'>
                    <Image
                    src={props.src}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    />
                </div>
                <div className='col-xs-8'>
                    <h1>{props.number}</h1>
                    <p>{props.text}</p> 
                </div>
            </CardStyle>
            <Background>
            </Background>
        </>
        
    )
  }
  
  export default Card
