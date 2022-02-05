import ProjectCard from '../ProjectCard'
import SectionHeader from '../SectionHeader'
import data from '@/data/projects.json'
const ProjectsSection = () => {
  const projects = data

  return (
    <section id="projects-section">
      <SectionHeader title="Projects" />
      <div className="grid h-min grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              projectSubtitle={project.projectSubtitle}
              projectDescription={project.projectDescription}
              tags={project.tags}
              imgLink={project.imgLink}
            />
          )
        })}
      </div>
    </section>
  )
}
export default ProjectsSection
