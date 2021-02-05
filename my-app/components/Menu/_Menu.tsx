import Image from 'next/image'
import {Nav,Align} from './_Menu-style'

const Menu = () =>{
    return (
        <Align className='row middle-xs between-xs'>
            <div className='col-xs-2'>
                <Image 
                    src='/logo.png'
                    alt='logo'
                    width={105.95}
                    height={80}
                />  
            </div>
            <div className='col-xs-10 end-xs'>
                <Nav href='https://poliangels.com.br/eventos'>Eventos</Nav>
                <Nav href='https://poliangels.com.br/equipe'>Equipe</Nav>
                <Nav href='https://poliangels.com.br/blog'>Blog</Nav>
                <Nav href='https://poliangels.com.br/conta/login'>Login</Nav>
            </div>
        </Align>
    );

}

export default Menu