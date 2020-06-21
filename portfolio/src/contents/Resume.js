import React,  {useState } from 'react';
import { Document, Page } from 'react-pdf';
import Container from 'react-bootstrap/Container';


import resume from '../documents/KiaraMcMorrisResume.pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return(
         <Container className='justify-conent-center'>
             {props.title && <h1 className='display-1'>{props.title}</h1>} 
        <div>
            <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
       </Container>
    )
}

export default Resume;

