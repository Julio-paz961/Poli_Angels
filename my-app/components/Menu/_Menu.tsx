import Image from 'next/image'
import {Row, Col } from 'react-styled-flexboxgrid';
import {Nav,Align} from './_Menu-style'


const Menu = () =>{
    return (
        <Align>
            <Row middle='xs' between='xs'>
                <Col xs={2}>
                    <Image 
                        src='/logo.png'
                        alt='logo'
                        width={105.95}
                        height={80}
                    />
                </Col>
                <Col xs={3}>
                    <Nav href='https://poliangels.com.br/eventos'>Eventos</Nav>
                    <Nav href='https://poliangels.com.br/equipe'>Equipe</Nav>
                    <Nav href='https://poliangels.com.br/blog'>Blog</Nav>
                    <Nav href='https://poliangels.com.br/conta/login'>Login</Nav>
                </Col>
            </Row>
        </Align>

    );
}

export default Menu