import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProductCart(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img} //
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"  sx={{ color: 'text.secondary', fontWeight: 700 }}>
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
    );
}
