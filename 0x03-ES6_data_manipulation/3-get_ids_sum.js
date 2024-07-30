export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  const result = students.reduce((accumulator, curElement) => accumulator + curElement.id, 0);
  return result;
}
