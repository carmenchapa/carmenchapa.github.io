import React from 'react'
import { Parragraph } from '../atoms'

const Section = ({ children, title }) => (
  <section className="pb-12 space-y-6 ">
    <Parragraph>{title}</Parragraph>
    {children}
  </section>
)

export default Section
