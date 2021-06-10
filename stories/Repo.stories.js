ExperienceItem
import React from 'react'
import { Repo } from '../src/components/molecules'

export default {
  title: 'Molecules/Repo',
  component: Repo
}

const Template = (args) => <Repo {...args} />

export const Repo = Template.bind({})
Repo.args = {
  stack: 'js'
}

// export const Bluebell = Template.bind({})
// Bluebell.args = {
//   type: 'Bluebell'
// }
