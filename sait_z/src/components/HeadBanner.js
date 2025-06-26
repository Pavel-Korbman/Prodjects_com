import Typography from '@mui/material/Typography';

function HeadBanner() {
    return (
        <div className="head-banner">
            <div className="line-box">
                <Typography
                    className="head-banner__line"
                    variant="h4"
                    component="h4"

                    sx={{
                        mb: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'white',
                        textDecoration: 'none',
                    }}>
                    Похоронное бюро Сергея Завьялова
                </Typography>

                <Typography
                    className="head-banner__line"
                    variant="h5"
                    component="h5"

                    sx={{
                        mb: 1,
                        display: { xs: 'flex', md: 'none' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'white',
                        textDecoration: 'none',
                    }}>
                    Похоронное бюро Сергея Завьялова
                </Typography>

                <Typography
                    className="head-banner__line "
                    component="div"
                >
                    <Typography
                        className="head-banner__line "
                        variant="body1"
                        component="p"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: '#e0e0e0',
                            textDecoration: 'none',
                        }}
                    >Ознакомиться с полным каталогом товаров и услуг для похорон, a также заказать и оплатить </Typography>
                    <Typography
                        className="head-banner__line "
                        variant="body1"
                        component="p"
                        sx={{
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            color: '#e0e0e0',
                            textDecoration: 'none',
                        }}
                    >можно связавшись с нами по телефону, электронной почте или мессенджеру.</Typography>

                </Typography>
            </div>


        </div>
    );
}

export default HeadBanner;
