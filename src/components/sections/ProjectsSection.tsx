import ProjectCard from '../ProjectCard'
import SectionHeader from '../SectionHeader'

const ProjectsSection = () => {
  const projects = [
    {
      projectName: 'Project #1',
      projectSubtitle: 'Subtitle #1',
      projectDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['react', 'javascript', 'nextJS'],
      imgLink: 'projectsImages/code.jpg',
    },
    {
      projectName: 'Project #2',
      projectSubtitle: 'Subtitle #2',
      projectDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['html5', 'css', 'tailwind', 'javascript'],
      imgLink: 'projectsImages/student.jpg',
    },
    {
      projectName: 'Project #3',
      projectSubtitle: 'Subtitle #3',
      projectDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['react', 'css', 'javascript'],
      imgLink: 'projectsImages/fractal.jpg',
    },
    {
      projectName: 'Project #4',
      projectSubtitle: 'Subtitle #4',
      projectDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      tags: ['security', 'SASS', 'python', 'fastAPI'],
      imgLink: 'projectsImages/fingerPrint.jpg',
    },
  ]

  return (
    <section>
      <SectionHeader title="Projects" />
      <div className="grid h-min grid-cols-1 gap-8 justify-items-center my-8">
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
