interface SectionHeaderProps {
  title: string
}
const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex h-full items-center">
      <h4 className="font-title text-2xl text-secondary font-semibold whitespace-nowrap pr-2">
        {title}
      </h4>
      <span className="h-px w-full bg-primaryText/50" />
    </div>
  )
}

export default SectionHeader
