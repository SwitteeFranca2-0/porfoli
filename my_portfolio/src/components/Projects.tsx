interface Project {
  title: string;
  description: string;
  role: string;
  team: string;
  responsibilities: string[];
}

const projects: Project[] = [
  {
    title: 'Online Banking Platform',
    description: 'A financial application for secure online banking operations',
    role: 'Lead Developer',
    team: 'Managed a team of 4 software engineers',
    responsibilities: [
      'Designed and Implemented a prototype web application for online banking',
      'Integrated a MySQL database for secure and efficient data storage',
      'Ensured application had all essential features of an online banking platform including account management, transactions and security'
    ]
  },
  {
    title: 'NLP Development for Next Word Predictor',
    description: 'Natural Language Processing application for word prediction',
    role: 'Lead Developer',
    team: 'Team of 4 machine learning engineers',
    responsibilities: [
      'Led a team in data collection and analysis for development of a natural language prediction application',
      'Implemented a Next Word Predictor application using Natural Language Processing(NLP) techniques',
      'Integrated the trained model with the application for user friendly use'
    ]
  }
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mb-4">
            <p className="text-gray-700"><span className="font-medium">Role:</span> {project.role}</p>
            <p className="text-gray-700"><span className="font-medium">Team:</span> {project.team}</p>
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {project.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 