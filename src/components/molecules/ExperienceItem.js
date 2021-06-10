import { NextImage, Title, Parragraph } from '../atoms'
import { ExperienceData } from '../../data/ExperienceData'

const ExperienceItem = ({ type }) => {
  return (
    <div className="flex flex-row justify-start align-start space-x-8 pb-8">
      <div className="min-w-max">
        <NextImage alt={type} imgSource={ExperienceData[type]?.img} />
      </div>
      <div>
        <Title text={ExperienceData[type]?.title} />
        <Parragraph>{ExperienceData[type]?.date} </Parragraph>
        <Parragraph>{ExperienceData[type]?.description} </Parragraph>
        <Parragraph bold>{ExperienceData[type]?.stack} </Parragraph>
      </div>
    </div>
  )
}

export default ExperienceItem
