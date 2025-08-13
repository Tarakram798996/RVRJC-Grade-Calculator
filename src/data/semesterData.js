// Letter grade -> points
export const gradeMap = {
  "A+": 10,
  "A": 9,
  "B": 8,
  "C": 7,
  "D": 6,
  "E": 5,
  "F": 0,
};

// Cumulative credits after each semester (from your syllabus):
// Sem1 19.5, Sem2 39.0, Sem3 60.5, Sem4 82.0,
// Sem5 103.5, Sem6 125.0, Sem7 148.0, Sem8 160.0
export const semCumCredits = [19.5, 39.0, 60.5, 82.0, 103.5, 125.0, 148.0, 160.0];

// Full syllabus (subjects with credits). MC courses are 0 credits (no effect on SGPA).
export const semesters = [
  // Semester 1
  {
    name: "Semester 1",
    subjects: [
      { name: "Mathematics – I", credits: 3 },
      { name: "Engineering Physics", credits: 3 },
      { name: "Basic Electrical & Electronics Engineering", credits: 3 },
      { name: "Programming for Problem Solving", credits: 3 },
      { name: "Engineering Physics Lab", credits: 1.5 },
      { name: "Basic Electrical & Electronics Engineering Lab", credits: 1.5 },
      { name: "Engineering Graphics and Design Lab", credits: 3 },
      { name: "Programming for Problem Solving Lab", credits: 1.5 },
      { name: "Constitution of India (MC)", credits: 0 },
    ],
  },

  // Semester 2
  {
    name: "Semester 2",
    subjects: [
      { name: "Mathematics – II", credits: 3 },
      { name: "Engineering Chemistry", credits: 3 },
      { name: "Digital Electronics", credits: 3 },
      { name: "English for Communication Skills", credits: 3 },
      { name: "Programming in Python", credits: 2 },
      { name: "Engineering Chemistry Lab", credits: 1.5 },
      { name: "Programming in Python Lab", credits: 1 },
      { name: "Computer Engineering Workshop", credits: 1.5 },
      { name: "English Language Communication Skills Lab", credits: 1.5 },
      { name: "Environmental Science (MC)", credits: 0 },
    ],
  },

  // Semester 3
  {
    name: "Semester 3",
    subjects: [
      { name: "Probability and Statistics", credits: 3 },
      { name: "Discrete Mathematics", credits: 3 },
      { name: "Computer Organization", credits: 3 },
      { name: "Data Structures", credits: 3 },
      { name: "Object Oriented Programming", credits: 3 },
      { name: "Probability and Statistics with R Lab", credits: 1.5 },
      { name: "Data Structures Lab", credits: 1.5 },
      { name: "Object Oriented Programming Lab", credits: 1.5 },
      { name: "Skill Oriented Course – I", credits: 2 },
      { name: "Design Thinking & Product Innovation (MC)", credits: 0 },
    ],
  },

  // Semester 4
  {
    name: "Semester 4",
    subjects: [
      { name: "Computational Statistics", credits: 3 },
      { name: "Database Management Systems", credits: 3 },
      { name: "Operating Systems", credits: 3 },
      { name: "Software Engineering", credits: 3 },
      { name: "Web Technologies", credits: 3 },
      { name: "Computational Statistics Lab", credits: 1.5 },
      { name: "Database Management Systems Lab", credits: 1.5 },
      { name: "Web Technologies Lab", credits: 1.5 },
      { name: "Skill Oriented Course – II", credits: 2 },
      { name: "Ethics & Human Values (MC)", credits: 0 },
    ],
  },

  // Semester 5
  {
    name: "Semester 5",
    subjects: [
      { name: "Automata Theory & Formal Languages", credits: 3 },
      { name: "Computer Networks", credits: 3 },
      { name: "Design & Analysis of Algorithms", credits: 3 },
      { name: "Professional Elective – I", credits: 3 },
      { name: "Open / Job-oriented Elective – I", credits: 3 },
      { name: "Design & Analysis of Algorithms Lab", credits: 1.5 },
      { name: "Data Analysis Lab", credits: 1.5 },
      { name: "Summer Internship", credits: 1.5 },
      { name: "Skill Oriented Course – III", credits: 2 },
    ],
  },

  // Semester 6
  {
    name: "Semester 6",
    subjects: [
      { name: "Artificial Intelligence", credits: 3 },
      { name: "Cryptography & Network Security", credits: 3 },
      { name: "Machine Learning", credits: 3 },
      { name: "Professional Elective – II", credits: 3 },
      { name: "Open / Job Oriented Elective – II", credits: 3 },
      { name: "Artificial Intelligence Lab", credits: 1.5 },
      { name: "Machine Learning Lab", credits: 1.5 },
      { name: "Term Paper", credits: 1.5 },
      { name: "Skill Oriented Course – IV", credits: 2 },
    ],
  },

  // Semester 7
  {
    name: "Semester 7",
    subjects: [
      { name: "HSS Elective", credits: 3 },
      { name: "Professional Elective – III", credits: 3 },
      { name: "Professional Elective – IV", credits: 3 },
      { name: "Professional Elective – V (MOOCS)", credits: 3 },
      { name: "Open / Job Oriented Elective – III", credits: 3 },
      { name: "Open / Job Oriented Elective – IV (MOOCS)", credits: 3 },
      { name: "Internship / Professional Certification", credits: 3 },
      { name: "Skill Oriented Course – V", credits: 2 },
    ],
  },

  // Semester 8
  {
    name: "Semester 8",
    subjects: [
      { name: "Project Work (Project, Seminar, Internship)", credits: 12 },
    ],
  },
];
