ExperienceItem
import React from 'react'
import { ExperienceItem } from '../src/components/molecules'
import { ExperienceData } from '../src/data/ExperienceData'

export default {
  title: 'Molecules/ExperienceItem',
  component: ExperienceItem
}

const Template = (args) => <ExperienceItem {...args} />

export const Webflow = Template.bind({})
Webflow.args = {
  type: 'webflow'
}

export const Bluebell = Template.bind({})
Bluebell.args = {
  type: 'bluebell'
}
