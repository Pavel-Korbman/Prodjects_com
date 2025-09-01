import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Box from '@mui/material/Box';
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

export default function ProductCart(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.img} //
                            alt="image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                                {props.name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ color: '#f16d7f', fontWeight: 700 }}>
                                {props.price} ₽
                            </Typography>
                            {props.text.map(item => (
                                <Typography key={item} variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item}
                                </Typography>
                            ))}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Заказать можно связавшись с нами по телефону, электронной почте или мессенджеру
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                </Box>
            </Modal>

        </div>
    );
}
