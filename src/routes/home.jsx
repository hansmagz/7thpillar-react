import React from 'react';
import Hero from '../components/hero'
import Section from '../components/section'
import Sponsors from '../components/sponsors'
import Ready from '../components/ready'
import Why from '../components/why'
import Leader from '../components/leader'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Why></Why>
      <Section></Section>
      <Sponsors></Sponsors>
      <Ready></Ready>
      <Leader></Leader>
      {/* <h1>Home</h1> */}
    </>
  );
}