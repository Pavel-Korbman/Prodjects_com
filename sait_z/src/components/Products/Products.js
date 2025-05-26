
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Header from "../Header";
import products from "../../data/data";
import ProductCart from "../ProductCart";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';
import Footer from "../Footer";

function Products() {

    let [filteredProducts, setFilteredProducts] = useState(products);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === 10) {
            setFilteredProducts(products.filter((item) => item.type === 'cremation'));
        } else if (event.target.value === 20) {
            setFilteredProducts(products.filter((item) => item.type === 'funeral'));
        } else { setFilteredProducts(products); };

    };

    return (
        <div>
            <Header services='white' products='primary' info='white'/>

            <div className="pages center">
                <Typography className='pages__title pages__title-top' variant="h4" gutterBottom>
                    Цены
                </Typography>

                <div className='box box__filter'>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label"><FilterListIcon /></InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={value}
                            label="Value"
                            onChange={handleChange}
                        >
                            <MenuItem value='Все'>
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value={10}>Кремация</MenuItem>
                            <MenuItem value={20}>Похороны</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='box'>
                    {filteredProducts.map(item => (
                        <ProductCart id={item.id} key={item.id} img={item.photoLink} name={item.name} price={item.price} text={item.description} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;