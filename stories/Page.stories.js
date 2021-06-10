import React from 'react'

import { Page } from '../src/components/organisms'
// import * as HeaderStories from './Header.stories'

export default {
  title: 'Organisms/Page',
  component: Page
}

const Template = (args) => <Page {...args} />

export const Default = Template.bind({})
Default.args = {}

// export const LoggedOut = Template.bind({})
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args
// }
