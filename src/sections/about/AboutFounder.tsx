/* eslint-disable */

import { Container, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

const AboutFounder = () => (
  <Container>
    <Image
      src="/assets/about/Dave.png"
      alt="Dave Boland Founder of enabled wearing a blue suit and white shirt"
    ></Image>
    <Typography variant="h3">About the Founder</Typography>
    <Typography variant="body1">
      <p>
        Dave Boland is a distinguished professional with a background in actuarial science and
        insurance risk modelling. With 15 years of experience, Dave has driven innovative risk
        assessment initiatives that enhance financial stability.
      </p>
      <p>
        He graduated top of his class in Computer Science and Mathematics, earning an award from the
        university President for maintaining a GPA above 3.5. Dave's academic credentials include
        serving as a senior lecturer and programme director at Queen Mary University of London,
        where he developed and delivered a module for the Master's in Business Analytics. Known for
        his analytical prowess and attention to detail, Dave excels in crafting sophisticated models
        that ensure accuracy.
      </p>
      <p>
        However, as an autistic individual with sensory needs and communication differences, Dave
        found traditional workplaces largely inaccessible, a challenge faced by 65% of disabled
        individuals in the UK.
        <p>
          He chose entrepreneurship to create solutions that ensure future generations, including
          his own children, never encounter these barriers.
        </p>
      </p>
    </Typography>
  </Container>
);

export default AboutFounder;
