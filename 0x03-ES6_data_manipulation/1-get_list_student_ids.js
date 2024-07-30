export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const results = array.map((element) => element.id);
  return results;
}
