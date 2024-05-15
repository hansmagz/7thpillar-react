import React from 'react';
import Hero from '../components/hero'
import Section from '../components/section'
import Sponsors from '../components/sponsors'
import Ready from '../components/ready'
import Why from '../components/why'
import Leader from '../components/leader'
import Industry from '../components/industry'
import Inquire from '../components/inquire'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Why></Why>
      <Section></Section>
      <Sponsors></Sponsors>
      <Industry></Industry>
      {/* <Ready></Ready> */}
      <Leader></Leader>
      <Inquire></Inquire>
      {/* <h1>Home</h1> */}
    </>
  );
}