interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Automation Engineer',
    company: 'Freelance Developer',
    period: 'March 2024 – Aug 2024',
    description: [
      'Utilised automation techniques for data gathering and compilation for the purpose of model training.',
      'Utilised automation techniques to improve workforce coordination and monitoring using third-party automation tools/services.',
      'Utilised Backend technologies and automation tools to automate workflow processes, thereby, increasing efficiency by 30%.'
    ]
  },
  {
    title: 'Woo-Commerce Developer',
    company: 'Freelance Developer',
    period: 'Jan 2024 – Aug 2024',
    description: [
      'Collaborated with a UI/UX engineer to build an E-commerce website.',
      'Employed woo-commerce for commercial and management efficiency for client.',
      'Built a fully customised website using Wordpress, and ensuring optimal user experience and streamlined business operation.'
    ]
  },
  {
    title: 'API Integration and Database Management',
    company: 'Freelance Developer',
    period: 'Jan 2024',
    description: [
      'Collaborated with Ethos Solution Inc for database management operations.',
      'Contributed to improving system performance and data integrity through secure and clean API integration.'
    ]
  }
];

export default function Experience() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            <span className="text-gray-600">{exp.period}</span>
          </div>
          <p className="text-gray-700 font-medium mb-4">{exp.company}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 