import Image from 'next/image'
import {Background, CardStyle} from './_Card-style'
import {H1,P} from '../../styles/typography'
import { Col, Row } from 'react-styled-flexboxgrid'


function Card(props) {
    return (
        <>
            <CardStyle>
                <Row middle='xs' center='xs'>
                    <Col xs={4}>
                        <Image
                        src={props.src}
                        alt="Picture of the author"
                        width={props.width}
                        height={props.height}
                        />
                    </Col>
                    <Col xs={8}>
                        <H1 color='#0C2634'>{props.number}</H1>
                        <P>{props.text}</P> 
                    </Col>
                </Row>
            </CardStyle>
            <Background>
            </Background>
            
        </>
        
    )
  }
  
  export default Card
