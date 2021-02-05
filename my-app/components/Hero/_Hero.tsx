import {Subtitle,Space} from './_Hero-style'
import {HeroText} from '../../styles/typography'

const Hero = () =>{
    return (
        <div className='row'>
            <Space className='col-xs-12'>
                <HeroText color='#0C2634'>
                    Investimos em
                </HeroText>
                <HeroText color='#1DBBFF'>
                    startups
                </HeroText>
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