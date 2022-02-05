import SectionHeader from '@/components/SectionHeader'
import JobCarousel from '../JobCarousel'
import data from '@/data/jobs.json'

const JobsSection = () => {
  return (
    <section
      id="jobs-section"
      className="grid h-min grid-cols-1 gap-8 text-primaryText bg-transparent overflow-hidden max-w-xl"
    >
      <SectionHeader title="Jobs" />
      <JobCarousel data={data} />
    </section>
  )
}

export default JobsSection
