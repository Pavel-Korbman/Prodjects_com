import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';

// import MenuItem from '@mui/material/MenuItem';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import PhoneIcon from '@mui/icons-material/Phone';

import Fab from '@mui/material/Fab';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function HeaderBack () {

    return (
        <AppBar position="fixed" className="header__color" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

                        <Fab href='/catalog' color="primary" aria-label="add">
                            <ArrowBackIosNewIcon />
                        </Fab>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderBack;