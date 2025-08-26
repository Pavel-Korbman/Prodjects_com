import HeaderBack from "../HeaderBack";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function Cars() {


    return (
        <div>
            <HeaderBack />            

            <div className="goods center">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

                    <Viewer fileUrl={require('../../img/cars.pdf')} />

                </Worker>
            </div>           

        </div >
    );
}

export default Cars;