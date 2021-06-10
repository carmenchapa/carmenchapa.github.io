import React from 'react'
import { NextImage } from '../atoms'
import { SocialData } from '../../data/SocialData'

const SocialLink = ({ type }) => (
  <a
    href={SocialData[type].link}
    alt={type}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NextImage
      imgSource={SocialData[type].img}
      size={36}
      target="_blank"
      rel="noopener noreferrer"
    />
  </a>
)

export default SocialLink
