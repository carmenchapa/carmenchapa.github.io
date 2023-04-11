import { ExperienceItem } from '../molecules'

const experienceArray = [
  'datacamp',
  'webflow',
  'labalytics',
  'maieu',
  'pepephone',
  'bluebell',
  'sky'
]
const Experience = () => (
  <div className="md:w-9/12">
    {experienceArray.map((item, i) => (
      <ExperienceItem key={i} type={item} />
    ))}
  </div>
)

export default Experience
