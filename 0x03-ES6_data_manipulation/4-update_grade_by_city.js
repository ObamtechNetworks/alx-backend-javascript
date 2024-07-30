export default function updateStudentGradeByCity(students, city, newGrades) {
  // Create a lookup object for newGrades for faster access
  const gradeLookup = newGrades.reduce((acc, { studentId, grade }) => {
    acc[studentId] = grade;
    return acc;
  }, {});

  // Filter students by city and update grades based on the lookup object
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: gradeLookup[student.id] || 'N/A',
    }));
}
