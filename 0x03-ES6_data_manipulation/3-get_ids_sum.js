export default function getStudentsIdsSum(students) {
  const initialValue = 0;

  const sum = students.reduce(
    (accumulator, student) => accumulator + student.id,
    initialValue,
  );

  return sum;
}
