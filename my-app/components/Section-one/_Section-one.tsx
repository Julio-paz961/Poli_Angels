import { Layout , Bottom} from './_Section-one-style';
import Card from '../Card/_Card'
import {P,H2} from '../../styles/typography'

const SectionOne = () =>{
    return (
        <>
            <div className='row center-xs'>
                <Layout className='col-xs-12'>
                    <Bottom></Bottom>
                    <H2 color={'#0C2634'}>Sobre a Poli Angels</H2>
                    <P>Somos uma associação de investidores, empreendedores e empresários, fundada por ex-alunos da Poli-USP apaixonados por inovação e tecnologia. Conhecemos os desafios enfrentados pelas startups early-stage e nossa missão é suportá-las com mentoria, networking e investimento, para juntos transformarmos o país através do empreendedorismo.</P>
                </Layout>
            </div>
            <div className='row center-xs'>
                <div className='col-xs-3'>
                    <Card width={50} height={50} src={'/startups.svg'} text={'startups investidas'} number={12}/>
                </div>
                <div className='col-xs-3'>
                    <Card width={50} height={50} src={'/investors.svg'} text={'investidores anjo'} number={145}/>
                </div>
                <div className='col-xs-3'>
                    <Card width={50} height={50} src={'/registered.svg'} text={'startups inscritas'} number={888}/>
                </div>
            </div>
        </>
    );

}

export default SectionOne
