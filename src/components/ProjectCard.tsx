interface Props {
  projectName: string
  projectSubtitle: string
  projectDescription: string
  tags: string[]
  imgLink: string
}
const ProjectCard = ({
  projectName,
  projectSubtitle,
  projectDescription,
  tags,
  imgLink,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url('${imgLink}')` }}
      className={`rounded-md transition-all duration-700 cursor-pointer max-w-sm bg-cover bg-center hover:translate-y-1 hover:scale-110`}
    >
      <div className="rounded bg-card/[.90] h-full overflow-hidden shadow-lg hover:bg-card/[.70] transition-all duration-1000">
        <div className="px-6 py-6 ">
          <h5 className="font-bold text-xl text-secondary mb-2">
            {projectName}
          </h5>
          <p className="font-bold text-lg text-primaryText py-2 pb-4">
            {projectSubtitle}
          </p>
          <p className="text-primaryText leading-relaxed text-sm">
            {projectDescription}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="inline-block bg-secondary rounded-full px-3 py-1 text-sm text-primaryText mr-2 mb-2"
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
