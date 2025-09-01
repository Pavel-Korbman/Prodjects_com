import Header from "../Header";
import Footer from "../Footer";
import Services from "../Services/Services";
import ServicesStepper from "../ServicesStepper";
import HeadBanner from "../HeadBanner";
import TopProducts from "./TopProducts";

function HomePage() {

    return (
        <div>
            <Header services='primary' products='white' info='white' />
            <HeadBanner/> 
            <Services />
            <TopProducts/>           
            <ServicesStepper />
            <Footer />
        </div >

    );
}

export default HomePage;
