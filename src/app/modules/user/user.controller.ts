
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res,) => {
  const { password, student: sudentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, sudentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created Successfully.',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};