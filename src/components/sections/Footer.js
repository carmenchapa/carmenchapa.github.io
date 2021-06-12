import { NextImage, Parragraph } from '../atoms'
import useTranslate from '../../../hooks/useTranslate'
const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className="flex justify-center border-t p-6 pb-4 align-center w-full">
      <a
        href="https://thelittleboat.es"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center space-y-2"
      >
        <NextImage imgSource="/icons/tlb.png" size={30} />
        <Parragraph style="text-center">{t.footer}</Parragraph>
      </a>
    </footer>
  )
}

export default Footer
