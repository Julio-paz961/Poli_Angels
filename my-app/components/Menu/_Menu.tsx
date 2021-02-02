import Image from 'next/image'
import styledLink from './_Menu-style'

const Menu = () =>{
    return (
        <header className='row'>
            <div className='col-xs-2'>
                <Image 
                    src='/logo.png'
                    alt='logo'
                    width={105.95}
                    height={80}
                />
            </div>
            <div className='col-xs-2'>
                <ul>
                    <styledLink>hsjsad </styledLink> 
                    <styledLink>Equipe</styledLink> 
                    <styledLink>Blog</styledLink> 
                    <styledLink>Login</styledLink> 
                </ul>
            </div>
        </header>
    );

}

export default Menu