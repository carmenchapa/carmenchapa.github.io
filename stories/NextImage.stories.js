import React from 'react'

import { NextImage } from '../src/components/atoms'

export default {
  title: 'Atoms/NextImage',
  component: NextImage
}

const Template = (args) => <NextImage {...args} />

export const Webflow = Template.bind({})
Webflow.args = {
  img: ''
}

export const Bluebell = Template.bind({})
Bluebell.args = {
  img: ''
}
