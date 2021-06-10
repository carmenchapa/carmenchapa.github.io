import { Languaje, NextImage } from '../atoms'
const Repo = ({ repo }) => (
  <a href={repo.url}>
    <div className="repo mr-4 mb-4 p-4 align-left flex flex-col rounded-md bg-white border border-gray-300 align-start w-60 h-32 justify-between">
      <div>
        <div className="flex flex-row justify-start space-x-2 pb-2">
          <NextImage imgSource="/icons/repo.svg" size={14} />
          <h2 className="text-blue-500 font-semibold text-base truncate whitespace-nowrap">
            {repo.name}
          </h2>
        </div>
        <p className=" break-normal font-regular text-gray-700 text-sm h-12 truncate whitespace-nowrap">
          {repo.description}
        </p>
      </div>
      <Languaje type={repo.language.toLowerCase()} />
    </div>
  </a>
)

export default Repo
