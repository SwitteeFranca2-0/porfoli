interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Technologies',
    skills: ['Python', 'Node.js', 'Flask', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB']
  },
  {
    title: 'Frontend Technologies',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Tools & Services',
    skills: ['Git/GitHub', 'Docker', 'JIRA', 'Postman', 'Selenium', 'Scrapy']
  },
  {
    title: 'Testing & Quality',
    skills: ['Unit Testing', 'Integration Testing', 'Jest', 'Pytest']
  },
  {
    title: 'Other Skills',
    skills: ['API Design', 'Database Design', 'System Architecture', 'WordPress', 'WooCommerce']
  }
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 