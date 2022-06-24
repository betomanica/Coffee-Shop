import React from 'react';
import './Pages.css';
import cafe from './imagens/cafe.webp';




export default function Home(props) {
    return (
        <div className='Home'>
            
            <div className="grid-container" >
                <div className="grid-item">
                <img className='cafe' src={cafe} alt="cafe" width="60%"></img>
                <p className='alignHome'><strong>NOSSA HISTÓRIA</strong></p>
                <p>Somos um espaço que abre as portas de casa para que cada cliente sinta-se acolhido e bem cuidado. Promovemos encontros e experiências multissensoriais que ajudam a tornar o dia das pessoas mais feliz.</p>
                <p>Inaugurado em setembro de 2015 no município de Teutônia - RS, o Quiero Café nasceu com o objetivo de combinar um ambiente acolhedor com produtos de qualidade e atendimento próximo e verdadeiro.</p>
                <p>Desde o início oferecemos opções que partem do café da manhã, passam pelo almoço a qualquer hora, lanche da tarde e finalizam o dia com um happy hour ou jantar.</p>
                <p>Nosso ambiente tem uma proposta aconchegante e diferenciada para satisfazer os clientes.</p>
                </div>        
            </div>

            
            <div className='space'></div>            
            <div className="lgpd">
                    <div className="text1">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços.</div>
                    <div className="text2">Para mais informações clique nesse <a className="lgpd2" href='https://drive.google.com/file/d/1VR9LCP4-5_o-S9OwBJQ6GwpQBKh-QdXv/view?usp=sharing' target="blank">Link</a> e consulte a nossa Política de Privacidade.</div>
            </div>
        </div>
    )}