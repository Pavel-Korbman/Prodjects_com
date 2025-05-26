
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

function Header(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="fixed" className="header__color" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <AccessTimeIcon fontSize="small" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'gray' }} />


                    <Typography
                        variant="h7"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'gray',
                            textDecoration: 'none',
                        }}
                    >
                        24\7
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                            <a href='/services'>
                                <MenuItem key='services' onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>Услуги</Typography>
                                </MenuItem>
                            </a>

                            <a href='/products'>
                                <MenuItem key='products' onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>Цены</Typography>
                                </MenuItem>
                            </a>

                            <a href='/info'>
                                <MenuItem key='info' onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>Информация</Typography>
                                </MenuItem>
                            </a>

                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <a href='/services'>
                            <Button
                                key='services'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: `${props.services}`, display: 'block' }}
                            >
                                Услуги
                            </Button>
                        </a>

                        <a href='/products'>
                            <Button
                                key='products'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: `${props.products}`, display: 'block' }}
                            >
                                Цены
                            </Button>
                        </a>

                        <a href='/info'>
                            <Button
                                key='info'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: `${props.info}`, display: 'block' }}
                            >
                                Информация
                            </Button>
                        </a>

                    </Box>
                    <Box className="header__end" sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }}}>
                        <Typography
                            variant="h7"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 1,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'gray',
                                textDecoration: 'none',
                            }}
                        >
                            8(777) 777 77 77
                        </Typography>
                        <Typography
                            variant="h7"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 1,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'gray',
                                textDecoration: 'none',
                            }}
                        >
                            mail@mail.ru
                        </Typography>

                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>
                        <PhoneIcon color='white' fontSize="small" sx={{ display: { xs: 'flex', md: 'flex' }, mr: 2, color: 'gray' }} />

                        <Typography
                            variant="h7"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'gray',
                                textDecoration: 'none',
                            }}
                        >
                            8(777) 777 77 77
                        </Typography>

                        <MailOutlineIcon color='white' fontSize="small" sx={{ display: { xs: 'flex', md: 'flex' }, mr: 2, color: 'gray' }} />

                        <Typography
                            variant="h7"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'gray',
                                textDecoration: 'none',
                            }}
                        >
                            mail@mail.ru
                        </Typography>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;