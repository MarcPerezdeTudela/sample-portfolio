import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import JobCard from './JobCard'
import { CSSProperties } from 'react'

interface Job {
  companyName: string
  jobName: string
  firstYear: number
  lastYear: number
  tasks: string[]
}

interface Props {
  data: Job[]
}

const JobCarousel = ({ data }: Props) => {
  const indicatorStyles: CSSProperties = {
    background: '#DDDDDD',
    width: 10,
    height: 10,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '9999px',
  }
  return (
    <Carousel
      showStatus={false}
      infiniteLoop={true}
      emulateTouch={true}
      showThumbs={false}
      transitionTime={500}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={30}
      showArrows={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#F05454' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      {data.map((job, index) => (
        <div
          key={index}
          className="flex justify-center cursor-grab text-left mx-1"
        >
          <JobCard
            companyName={job.companyName}
            jobName={job.jobName}
            firstYear={job.firstYear}
            lastYear={job.lastYear}
            tasks={job.tasks}
          />
        </div>
      ))}
    </Carousel>
  )
}
export default JobCarousel
