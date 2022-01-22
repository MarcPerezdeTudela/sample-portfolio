import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import JobCard from './JobCard'
import { CSSProperties } from 'react'

const JobCarousel = () => {
  const jobs = [
    {
      companyName: 'Company #1',
      jobName: 'Job Name',
      firstYear: 2010,
      lastYear: 2015,
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut laoreet tortor.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed tortor ut.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus fringilla vestibulum. ',
      ],
    },
    {
      companyName: 'Company #2',
      jobName: 'Job Name 2',
      firstYear: 2015,
      lastYear: 2018,
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut laoreet tortor.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed tortor ut.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus fringilla vestibulum. ',
      ],
    },
    {
      companyName: 'Company #3',
      jobName: 'Job Name 3',
      firstYear: 2018,
      lastYear: 2020,
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut laoreet tortor.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed tortor ut.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus fringilla vestibulum. ',
      ],
    },
  ]

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
      {jobs.map((job, index) => (
        <div key={index} className="cursor-grab text-left mx-1">
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
