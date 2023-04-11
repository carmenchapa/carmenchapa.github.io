import useTranslate from '../../../hooks/useTranslate'
import { NextImage, Title, Parragraph } from '../atoms'
import { ExperienceData } from '../../data/ExperienceData'

const ExperienceItem = ({ type }) => {
  const { t } = useTranslate()
  return (
    <div className="flex flex-row justify-start align-start space-x-8 pb-8">
      <div className="min-w-max">
        <NextImage alt={type} imgSource={ExperienceData[type]?.img} />
      </div>
      <div>
        <Title text={t.experience[type]?.title} />
        <Parragraph>{t.experience[type]?.date} </Parragraph>
        <Parragraph>{t.experience[type]?.description} </Parragraph>
        <Parragraph bold>{t.experience[type]?.stack} </Parragraph>
      </div>
    </div>
  )
}

export default ExperienceItem
