import { NextImage, Parragraph } from '../atoms'

const Footer = () => (
  <footer className="flex justify-center border-t p-6 pb-4 align-center w-full">
    <a
      href="https://thelittleboat.es"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center space-y-2"
    >
      <NextImage imgSource="/icons/tlb.png" size={30} />
      <Parragraph style="text-center">
        ©2021 Developed by Carmen Chapa · Powered by The Little Boat
      </Parragraph>
    </a>
  </footer>
)

export default Footer
