import { MdOutlineWork } from 'react-icons/md'
interface JobCardProps {
  companyName: string
  jobName: string
  firstYear: number
  lastYear: number
  tasks: Array<string>
}
const JobCard = ({
  companyName,
  jobName,
  firstYear,
  lastYear,
  tasks,
}: JobCardProps) => {
  return (
    <div className="w-full bg-card rounded-md shadow-xl">
      <div className="bg-[url('../public/floating-cogs.svg')] py-6 px-6">
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="text-secondary font-bold">{companyName}</span>
            <p className="font-semibold text-xl py-2">{jobName}</p>
            <p className=" text-sm font-bold text-secondary">
              {`${firstYear}  -  ${lastYear}`}
            </p>
          </div>
          <MdOutlineWork
            className="mr-4 fill-secondary p-2 bg-primaryText rounded-full"
            size={52}
          />
        </div>
        <div className="leading-relaxed text-sm">
          <ul className="pl-4 px-2 list-disc grid gap-2 pt-8 pb-12 text-secondary">
            {tasks.map((task, index) => (
              <li key={index}>
                <p className="text-primaryText">{task}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JobCard
