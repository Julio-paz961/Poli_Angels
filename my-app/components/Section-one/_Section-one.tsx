import Image from 'next/image'

const Menu = () =>{
    return (
        <header className='row'>
            <div className='col-xs-2'>
                <Image 
                    src='/logo.png'
                    alt='logo'
                    width={50}
                    height={50}
                />
            </div>
            <div className='col-xs-2'>
                <ul>
                    <li>
                        <a></a>
                    </li>
                </ul>
            </div>
        </header>
    );

}

export default Menu