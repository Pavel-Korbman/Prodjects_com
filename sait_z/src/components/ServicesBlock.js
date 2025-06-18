import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};

function ServicesBlock() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="type__margin">

            <nav className="type__block on">
                <div onClick={ handleOpen }>
                    <div className="type__item type__item__bgrd-1">
                        <p className="type__item__text-1">Подготовка</p>
                        <p className="type__item__text">Оформление документов, место на кладбище, подготовка церемонии, оформление места захоронения</p>
                    </div>
                </div>
                <a href="/">
                    <div className="type__item type__item__bgrd-2">
                        <p className="type__item__text-1">Проведение</p>
                        <p className="type__item__text">Траурный зал, погребение, похоронная процессия, церемония</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-3">
                        <p className="type__item__text-1">Сопровождение</p>
                        <p className="type__item__text">Поминальная трапеза, съёмка, церемониймейстер, медицинское сопровождение</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-4">
                        <p className="type__item__text-1">Комплекс услуг</p>
                        <p className="type__item__text">Ритуальные услуги во всех районах Москвы и в Московской области</p>
                    </div>
                </a>

            </nav>
            <nav className="type__block off mobyle__off">
                <div onClick={ handleOpen }>
                    <div className="type__item type__item__bgrd-1">

                        <p className="type__item__text-1">Подготовка</p>
                        <p className="type__item__text">Оформление документов, место на кладбище, подготовка церемонии, оформление места захоронения</p>
                    </div>
                </div>
                <a href="/">
                    <div className="type__item type__item__bgrd-2">
                        <p className="type__item__text-1">Проведение</p>
                        <p className="type__item__text">Траурный зал, погребение, похоронная процессия, церемония</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-3">
                        <p className="type__item__text-1">Сопровождение</p>
                        <p className="type__item__text">Поминальная трапеза, съёмка, церемониймейстер, медицинское сопровождение</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-4">

                        <p className="type__item__text-1">Комплекс услуг</p>
                        <p className="type__item__text">Ритуальные услуги во всех районах Москвы и в Московской области</p>
                    </div>
                </a>

            </nav>
            <nav className="type__block mobyle__on">
                <div onClick={ handleOpen }>
                    <div className="type__item type__item__bgrd-1">
                        <p className="type__item__text-1">Подготовка</p>
                        <p className="type__item__text">Оформление документов, место на кладбище, подготовка церемонии, оформление места захоронения</p>

                    </div>
                </div>
                <a href="/">
                    <div className="type__item type__item__bgrd-2">
                        <p className="type__item__text-1">Проведение</p>
                        <p className="type__item__text">Траурный зал, погребение, похоронная процессия, церемония</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-3">
                        <p className="type__item__text-1">Сопровождение</p>
                        <p className="type__item__text">Поминальная трапеза, съёмка, церемониймейстер, медицинское сопровождение</p>
                    </div>
                </a>

                <a href="/">
                    <div className="type__item type__item__bgrd-4">
                        <p className="type__item__text-1">Комплекс услуг</p>
                        <p className="type__item__text"> Ритуальные услуги во всех районах Москвы и в Московской области</p>
                    </div>
                </a>

            </nav>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>

        </div>
    );
}

export default ServicesBlock;
