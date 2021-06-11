import React from 'react'
import useReposFetch from '../../hooks/useReposFetch'
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
  const { status, data } = useReposFetch()
  return (
    <div className="mx-auto w-4/5 md:w-9/12 lg:w-8/12 overflow-hidden space-y-4 ">
      <section className="flex flex-col md:flex-row py-16 md:py-48 items-center justify-start space-y-8 md:space-y-0 md:space-x-10">
        <div style={svgBg} className="flex justify-center items-center p-8">
          <NextImage imgSource="/memoji.png" size={400} />
        </div>
        {/* <video width={300} height={300} allow="autoplay" autoPlay={true} muted={true} playsinline poster="/emoji.png" >
          <source src={require('../../../public/memoji-video.webm')} type="video/webm"/>
          <source src={require('../../../public/memoji-video.mp4')} type="video/mp4"/>
        </video> */}
        <div>
          <h1 className="font-semibold text-6xl pb-8">Hello!</h1>
          <Parragraph style="lg:text-xl">
            I am Carmen Chapa, Founder and FullStack Developer at
            <a
              href="https://www.thelittleboat.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              {' @TheLittleBoat_'}
            </a>
            <br />
            <br />I build mobile and desktop apps. I help companies make better
            products through quality software.
          </Parragraph>

          <div className="flex-wrap space-x-8 lg:space-x-14 pt-8">
            {socialArray.map((item) => (
              <SocialLink type={item} />
            ))}
          </div>
        </div>
      </section>
      <Section title="Repos">
        <div className="flex flex-row flex-wrap">
          {data.repos?.slice(0, 4).map((item) => (
            <Repo repo={item} />
          ))}
        </div>
      </Section>
      <Section title="Experience">
        <Experience />
      </Section>
    </div>
  )
}

export default Page
