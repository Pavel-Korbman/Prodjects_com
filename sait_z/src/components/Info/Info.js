// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography';
// import faq from '../../data/faq';
import Footer from "../Footer";
import Header from "../Header";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function Info() {


    return (
        <div>
            <Header services='white' products='white' info='primary' />


            {/* <div className="pages  ">
                <div className='box'>
                    <div className="pages center">
                        <Typography className='pages__title' variant="h4" gutterBottom>
                            Часто задаваемые вопросы
                        </Typography>
                        <div className='box box__faq'>
                            {faq.map(item => (
                                <Accordion key={item.id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">{item.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {item.answer}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
            </div>  */}

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
               <Viewer fileUrl={require('../../img/goods_1.pdf')} />;
            </Worker>      




            <Footer />

        </div >
    );
}

export default Info;
