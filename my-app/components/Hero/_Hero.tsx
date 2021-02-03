import {HeroStyle,Subtitle,Space} from './_Hero-style'

const Hero = () =>{
    return (
        <Space className='row'>
            <div className='col-xs-8'>
                <HeroStyle color='#0C2634'>
                    Investimos em
                </HeroStyle>
                <HeroStyle color='#1DBBFF'>
                    startups
                </HeroStyle>
            </div>
            <div className='col-xs-8'>
                <Subtitle>
                    Fomentamos o empreendedorismo brasileiro através do &nbsp;
                    <Subtitle color='#1DBBFF'>
                        investimento anjo.
                    </Subtitle >
                </Subtitle>

            </div>
        </Space>
    );

}

export default Hero