/* eslint-disable */

import { Container, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';
import Logo from 'src/components/logo';

const AboutEnabled = () => (
  <Container>
    <Logo />
    <Typography variant="h3">About enableD</Typography>
    <Typography variant="body1">
      <p>
        enableD is at the forefront of creating a more inclusive and accessible workplace for
        employees with disabilities. Our mission is to simplify the process of requesting and
        managing reasonable adjustments, ensuring that both employees and employers can navigate
        this crucial aspect of workplace inclusivity with ease.
      </p>
      <p>
        At enableD, we understand that each employee’s needs are unique, and so are the challenges
        faced by employers in meeting those needs. Our innovative platform streamlines the
        adjustment request process, providing a user-friendly interface that allows employees to
        request modifications seamlessly and employers to manage these requests efficiently. By
        integrating compliance with legal requirements into our system, we help businesses not only
        fulfil their obligations but also foster a culture of equity and support.
      </p>
      <p>
        We are committed to empowering employees with disabilities by making their voices heard and
        their needs addressed promptly. Our solutions are designed to enhance workplace
        accessibility, ensuring that every employee has the tools and support they need to reach
        their full potential.
        <p>
          For employers, enableD offers a comprehensive suite of features that simplifies tracking,
          managing, and reporting on reasonable adjustments. Our platform supports legal compliance,
          reduces administrative burden, and promotes a diverse and inclusive work environment.
        </p>
        <p>
          Together, we are building workplaces where every individual can thrive, and where
          diversity and inclusion are at the core of organisational success. enableD is your partner
          in creating a workplace that values and supports all employees, driving both productivity
          and innovation.
        </p>
      </p>
    </Typography>
  </Container>
);

export default AboutEnabled;
