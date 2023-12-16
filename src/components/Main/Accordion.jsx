import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
export default function BasicAccordion({faq}) {
    const[expanded,setExpanded]=useState(false)
  return (
    <div>
      <Accordion style={{borderRadius:'12px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={`${expanded?'text-orange':'text-secondary'}`} onClick={()=>setExpanded(!expanded)} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <b className={`${expanded?'text-orange':'text-secondary'}`}>{faq.ask}</b>
        </AccordionSummary>
        <AccordionDetails>
          <span>
         {faq.answer}
          </span>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
