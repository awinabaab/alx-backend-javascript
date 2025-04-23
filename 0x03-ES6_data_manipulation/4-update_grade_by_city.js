export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsWithGrades = students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });

  return studentsWithGrades;
}
