export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) && typeof city !== 'string') {
    return [];
  }

  const results = students.filter((elements) => elements.location === city);

  return results;
}
