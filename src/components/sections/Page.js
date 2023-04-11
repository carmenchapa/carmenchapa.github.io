import React from 'react'
import useTranslate from '../../../hooks/useTranslate'
import useReposFetch from '../../../hooks/useReposFetch'
import { NextImage, Parragraph } from '../atoms'
import { Repo, SocialLink } from '../molecules'
import { Experience } from '../organisms'
import { Section } from '../templates'

const socialArray = ['github', 'linkedin', 'twitter', 'braintrust']

const svgBg = {
  backgroundImage: 'url(/blob.svg)',
  backgroundRepeat: 'no-repeat'
}

const Page = ({ children }) => {
  const { t, setLang } = useTranslate()
  const { status, data } = useReposFetch()
  const changeLang = () => setLang(t.lang.toLowerCase())
  return (
    <div className="mx-auto w-4/5 md:w-9/12 lg:w-8/12 overflow-hidden space-y-4 ">
      <div
        onClick={changeLang}
        className="absolute top-8 right-8 font-bold cursor-pointer"
      >
        {t.lang}
      </div>
      <section className="flex flex-col md:flex-row py-16 md:py-48 items-center justify-start space-y-8 md:space-y-0 md:space-x-10">
        <div
          style={svgBg}
          className="flex justify-center items-center p-8 md:w-2/5"
        >
          <NextImage imgSource="/memoji.png" size={400} />
        </div>
        {/* <video width={300} height={300} allow="autoplay" autoPlay={true} muted={true} playsinline poster="/emoji.png" >
          <source src={require('../../../public/memoji-video.webm')} type="video/webm"/>
          <source src={require('../../../public/memoji-video.mp4')} type="video/mp4"/>
        </video> */}
        <div className="flex flex-col md:w-3/5">
          <h1 className="font-semibold text-6xl pb-8">{t.home.hello}</h1>
          <Parragraph style="lg:text-xl">
            {t.home.p1}
            <a
              href="https://www.thelittleboat.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              {t.home.tlb}
            </a>
            <br />
            <br />
            {t.home.p2}
          </Parragraph>

          <div className="flex-wrap flex gap-8 lg:space-x-14 pt-8">
            {socialArray.map((item, i) => (
              <SocialLink key={i} type={item} />
            ))}
          </div>
        </div>
      </section>
      <Section title={t.repos}>
        <div className="flex flex-row flex-wrap">
          {data.repos?.map((item, i) => (
            <Repo key={i} repo={item} />
          ))}
        </div>
      </Section>
      <Section title={t.experience.title}>
        <Experience />
      </Section>
    </div>
  )
}

export default Page
