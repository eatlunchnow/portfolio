import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import resume from '../documents/KiaraMcMorrisResume.pdf';

import "react-pdf/dist/Page/AnnotationLayer.css";

export default class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div style={{ width: 1000 }}>
          <Document className='auto px-10'
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={1000} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}



/* import React,  {useState } from 'react';
import Container from 'react-bootstrap/Container';

import { Document, Page } from 'react-pdf';


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
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
       </Container>
    )
} 

export default Resume;

 */