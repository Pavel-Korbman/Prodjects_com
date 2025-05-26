import Header from "../Header";
import Typography from '@mui/material/Typography';

function HomePage() {

    return (
        <div>
            <Header />
            <div className="head-banner">
                <div className="line-box">
                    <Typography
                        className="head-banner__line"
                        variant="h4"                       
                        component="h4"

                        sx={{
                            mb: 1,
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}>
                        Похоронное бюро Сергея Завьялова
                    </Typography>

                    <Typography
                        className="head-banner__line "
                        variant="body1"                        
                        component="p"
                        sx={{                            
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 500,
                            letterSpacing: '.15rem',
                            color: '#e0e0e0',
                            textDecoration: 'none',
                        }}>
                        Ознакомиться с полным каталогом товаров и услуг для похорон,
                        а также заказать и оплатить можно связавшись с нами по телефону,
                        электронной почте или мессенджеру.
                    </Typography>
                </div>


            </div>
            <div className="pages center">
              


           

               

            </div>
            {/* <Footer /> */}

        </div >

    );
}

export default HomePage;
