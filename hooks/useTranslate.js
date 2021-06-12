import { useState } from 'react'

const useTranslate = () => {
  const [lang, setLang] = useState('en')
  const t = require(`../public/locales/${lang}.json`)
  return { t, setLang }
}

export default useTranslate
