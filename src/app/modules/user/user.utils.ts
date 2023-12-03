/* eslint-disable no-undefined */
import { TAcademicSemseter } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastSudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent?.id : undefined;
};
export const generateStudentId = async (payload: TAcademicSemseter) => {
  // first time 0000

  let currentId = (0).toString(); ///0000 by deafult
  const lastStudentId = await findLastSudentId();
  //2030 01 0001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01
  const lastStudentYear = lastStudentId?.substring(0, 4); // 2030
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6); ///0001
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};