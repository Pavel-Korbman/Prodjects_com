import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function HeaderBack() {

    return (

        <Container maxWidth="xl">
            <Toolbar disableGutters>

                <Box position="fixed" className="header__back " sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                    <Fab href='/catalog' color="primary" aria-label="back" size="small">
                        <ArrowBackIosNewIcon />
                    </Fab>
                </Box>

                <Box position="fixed" className="header__back " sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                    <Fab href='/catalog' color="primary" aria-label="back" size="medium">
                        <ArrowBackIosNewIcon />
                    </Fab>
                </Box>

            </Toolbar>
        </Container>

    );
}
export default HeaderBack;