import {Subtitle,Space} from './_Hero-style'
import {HeroText} from '../../styles/typography'
import { Row ,Col} from 'react-styled-flexboxgrid';

const Hero = () =>{
    return (
        <Row>
            <Space>
                <Col xs={12}>
                    <HeroText color='#0C2634'>
                        Investimos em
                    </HeroText>
                    <HeroText color='#1DBBFF'>
                        startups
                    </HeroText>
                </Col>
                <Col xs={12}>
                    <Subtitle>
                        Fomentamos o empreendedorismo brasileiro através do &nbsp;
                        <Subtitle color='#1DBBFF'>
                            investimento anjo.
                        </Subtitle >
                    </Subtitle>
                </Col>
            </Space>
        </Row>
    );

}

export default Hero