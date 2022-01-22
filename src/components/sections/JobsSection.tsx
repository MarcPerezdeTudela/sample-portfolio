import SectionHeader from '@/components/SectionHeader'
import JobCarousel from '../JobCarousel'

const JobsSection = () => {
  return (
    <section className="grid h-min grid-cols-1 gap-8 text-primaryText bg-transparent overflow-hidden">
      <SectionHeader title="Jobs" />
      <JobCarousel />
    </section>
  )
}

export default JobsSection
