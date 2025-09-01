// import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Footer from "../Footer";
import Header from "../Header";
import GoodsBlock from "../GoodsBlock";


function Catalog() {

    return (
        <div>
            <Header services='white' products='white' info='primary' />

            <Typography className='pages__title' variant="h4" gutterBottom>
                Ритуальные товары
            </Typography>

            <GoodsBlock />

            <Footer />

        </div >
    );
}

export default Catalog;
