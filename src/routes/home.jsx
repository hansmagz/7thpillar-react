import React from 'react';
import Hero from '../components/hero'
import Section from '../components/section'
import Sponsors from '../components/sponsors'
import Ready from '../components/ready'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Section></Section>
      <Sponsors></Sponsors>
      <Ready></Ready>
      {/* <h1>Home</h1> */}
    </>
  );
}