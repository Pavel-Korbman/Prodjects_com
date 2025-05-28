import Typography from '@mui/material/Typography';
import ServicesBlock from '../ServicesBlock';

function Services() {
    return (
        <div>

            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Ритуальные услуги
                </Typography>
                <div className='box text__block'>
                    <Typography className='pages__title' variant="h7" gutterBottom>
                        Похоронное бюро Сергея Завьялова в Москве делает акцент на качестве предоставляемых ритуальных услуг и гарантирует внимание и индивидуальный подход к каждому, кто столкнулся с утратой близкого. Мы подготовим всю необходимую документацию для похорон, зарезервируем место на кладбище, согласуем своевременную подачу автокатафального транспорта, подберём траурный зал и место для проведения поминальной трапезы.
                    </Typography>
                </div>
                <ServicesBlock />
            </div>



        </div>
    );
}

export default Services;


