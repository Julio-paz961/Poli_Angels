import {HeroStyle,Subtitle,Space} from './_Hero-style'

const Hero = () =>{
    return (
        <div className='row'>
            <Space className='col-xs-12'>
                <HeroStyle color='#0C2634'>
                    Investimos em
                </HeroStyle>
                <HeroStyle color='#1DBBFF'>
                    startups
                </HeroStyle>
            </Space>
            <Space className='col-xs-12'>
                <Subtitle>
                    Fomentamos o empreendedorismo brasileiro através do &nbsp;
                    <Subtitle color='#1DBBFF'>
                        investimento anjo.
                    </Subtitle >
                </Subtitle>
            </Space>
        </div>
    );

}

export default Hero