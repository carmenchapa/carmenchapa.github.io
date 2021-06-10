import Image from 'next/image'
// import bluebell from '/icons/webflow.png'

const NextImage = ({ alt, imgSource, size }) => (
  <Image
    alt={alt || 'carmen'}
    src={imgSource || '/icons/bluebell.png'}
    width={size || 60}
    height={size || 60}
  />
)

export default NextImage
