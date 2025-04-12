interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Certification in Software Engineering',
    institution: 'ALX-Software Engineering Training Programme',
    period: '2023 - 2024',
    details: [
      'Completed professional development in the 12 Month Software Engineering training programme',
      'Sponsored by MasterCard and ALU-Holberton School',
      'Awarded Certificate of Completion'
    ]
  },
  {
    degree: 'Bachelor of Engineering: Chemical Engineering',
    institution: 'University of Lagos, Nigeria',
    period: '2021 - Present',
    details: [
      'First class (4.67 / 5.0)',
      'Expected graduation: 2025'
    ]
  }
];

export default function Education() {
  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <span className="text-gray-600">{edu.period}</span>
          </div>
          <p className="text-gray-700 font-medium mb-4">{edu.institution}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 