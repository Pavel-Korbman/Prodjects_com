import { Button } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

function Catalog() {

    return (
        <div>
            <Header services='white' products='white' info='primary' />

            <div className="pages center">

                <Button href='/cloth-coffins'>
                    Гробы обитые тканью и комбинированные
                </Button>
                <p></p>
                <Button href='/polished-coffins'>
                    Гробы полированные и фурнитура
                </Button>
                <p></p>
                <Button href='/bedding'>
                    Постель в гроб
                </Button>
                <p></p>
                <Button href='/dress'>
                    Ритуальная одежда и траурные принадлежности
                </Button>
                <p></p>
                <Button href='/crosses'>
                    Кресты и ритуальные таблички
                </Button>
                <p></p>
                <Button href='/garlands'>
                    Гирлянды в изголовье
                </Button>
                <p></p>
                <Button href='/compositions'>
                    Кремационные композиции
                </Button>
                <p></p>
                <Button href='/wreaths'>
                    Венки и ленты
                </Button>
                <p></p>
                <Button href='/cars'>
                    Катафальный транспорт
                </Button>

            </div>

            <Footer />

        </div >
    );
}

export default Catalog;
