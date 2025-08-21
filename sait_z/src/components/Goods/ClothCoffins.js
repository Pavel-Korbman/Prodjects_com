
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import HeaderBack from "../HeaderBack";


function ClothCoffins() {


    return (
        <div>

            <HeaderBack />          

            <div className="pages center">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

                    <Viewer fileUrl={require('../../img/cloth_coffins.pdf')} />

                </Worker>
            </div>

            {/* <Footer /> */}

        </div >
    );
}

export default ClothCoffins;