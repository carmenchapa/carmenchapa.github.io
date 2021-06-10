import { ExperienceItem } from '../molecules'

const experienceArray = [
  'webflow',
  'labalytics',
  'maieu',
  'pepephone',
  'bluebell',
  'sky'
]
const Experience = () => (
  <div className="md:w-9/12">
    {experienceArray.map((item) => (
      <ExperienceItem type={item} />
    ))}
  </div>
)

export default Experience
