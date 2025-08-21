import Footer from "../Footer";
import Header from "../Header";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function Garlands() {


    return (
        <div>
            <Header services='white' products='white' info='primary' />            

            <div className="pages center">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

                    <Viewer fileUrl={require('../../img/garlands.pdf')} />

                </Worker>
            </div>

            <Footer />

        </div >
    );
}

export default Garlands;