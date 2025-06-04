
import products from "../../data/data";
import ProductCart from "../ProductCart";

function TopProducts() {
    return (
        <div className="center">  
            <div className='box'>
                {products.filter(item => item.inTop === true).map(item => (
                    <ProductCart id={item.id} key={item.id} img={item.photoLink} name={item.name} price={item.price} text={item.description} />
                ))}
            </div>
            <div className="button-box">
                <a className="button" href="/products">Смотреть все</a>
            </div>
        </div>
    );
}

export default TopProducts;
