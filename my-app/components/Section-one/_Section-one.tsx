import Image from 'next/image'
import { Title } from './_Section-one-style';
import Card from '../Card/_Card'

const SectionOne = () =>{
    return (
        <header>
            <div className='row center-xs'>
                <Title className='col-xs-12'>
                    <h2>Sobre a Poli Angels</h2>
                    <p>Somos uma associação de investidores, empreendedores e empresários, fundada por ex-alunos da Poli-USP apaixonados por inovação e tecnologia. Conhecemos os desafios enfrentados pelas startups early-stage e nossa missão é suportá-las com mentoria, networking e investimento, para juntos transformarmos o país através do empreendedorismo.</p>
                </Title>
            </div>
            <div className='row center-xs'>
                <div className='col-xs-3'>
                    <Card src={'/startups.svg'} text={'startups investidas'} number={12}/>
                </div>
                <div className='col-xs-3'>
                    <Card src={'/investors.svg'} text={'investidores anjo'} number={145}/>
                </div>
                <div className='col-xs-3'>
                    <Card src={'/registered.svg'} text={'startups inscritas'} number={888}/>
                </div>
            </div>
        </header>
    );

}

export default SectionOne
