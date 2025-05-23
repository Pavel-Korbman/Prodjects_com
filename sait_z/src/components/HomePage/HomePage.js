import Header from "../Header";
import Typography from '@mui/material/Typography';

function HomePage() {

    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Похоронное бюро Сергея Завьялова
                </Typography>

                <div class="banner-box">
                    <div class="head-banner">
                        <h1 class="head-banner__line center">Похоронное бюро</h1>
                        <h1 class="head-banner__line logo-text center">СЕРГЕЯ ЗАВЬЯЛОВА</h1>
                        <p class="head-banner__subtitle center">Ознакомиться с&nbsp;полным каталогом товаров и&nbsp;услуг для
                            похорон,<br />а&nbsp;также заказать и&nbsp;оплатить можно связавшись с&nbsp;нами
                            по&nbsp;телефону,<br />
                            электронной почте или мессенджеру.</p>
                    </div>
                </div>

                {/* <div className='box'>
                    <a href="/programs" >
                        <ProgramCart id={'title-banner'} img={require('../../img/title_banner.jpg')} title={'Выберите программу обучения'} text={'Перейдите в раздел "Программы обучения". Выберите  интересующее вас направление, при помощи фильтра и начните обучение.'} />
                    </a>
                    <a href="/lecturers" >
                        <ProgramCart id={'title-banner'} img={require('../../img/title_banner_2.jpg')} title={'Познакомьтесь с преподавателями'} text={'Перейдите в раздел "Преподаватели". Прочитайте подробную информацию о наших преподавателях.'} />
                    </a>
                </div> */}

            </div>
            {/* <Footer /> */}

        </div >

    );
}

export default HomePage;
