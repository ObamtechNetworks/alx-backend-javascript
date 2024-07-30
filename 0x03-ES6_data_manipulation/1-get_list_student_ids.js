export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  let results = array.map(element => element.id);
  return results;
}
