// import Accordion from '../components/Accordion';
// import styles from '../styles/FAQ.module.css';
// import Head from 'next/head';

// export default function Faq() {
//   return (
//     <>
//       <Head>
//         <title> Frequently asked questions about the EnableD platform </title>
//         <meta name="FAQ" content="EnableD Workplace inclusion for disabled people fequently asked questions" />
//       </Head>
//       <div className={styles.wrapper}>
//         <Accordion
//           title="Who is EnableD for?"
//           description="EnableD is for employees with disabilities and their employers who are committed to creating an inclusive workplace."
//         />
//         <Accordion
//           title="What is EnableD?"
//           description="   EnableD is an easy-to-use app that streamlines the process of requesting and managing disability accommodations in the workplace.
//         With EnableD, employees can quickly and easily request the accommodations they need, while employers can efficiently manage these
//         requests and ensure compliance with legal requirements."
//         />
//         <Accordion
//           title="Why would I need EnableD?"
//           description="Disability accommodations can be a complex and time-consuming process, and many employers are unaware of their legal obligations
//         when it comes to accommodating employees with disabilities. EnableD solves these problems by creating a more efficient, compliant, workplace."
//         />
//         <Accordion
//           title="Where can I access EnableD?"
//           description="EnableD is available as a web-based app, accessible from any device with an internet connection. It can be used by employees and
//         employers across a wide range of industries and organisations."
//         />
//         <Accordion
//           title="When can I start using EnableD?"
//           description=" EnableD is available now, and can be implemented in your workplace today to start creating a more inclusive and accessible
//         environment."
//         />
//         <Accordion
//           title="How do I get started with EnableD?"
//           description="Getting started with EnableD is easy - simply sign up and start using the app to request and manage disability accommodations. Our
//         support team is available to answer any questions you may have, and to provide assistance with implementing the app in your
//         workplace."
//         />
//       </div>
//     </>
//   );
// }

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          // expandIcon={< />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
