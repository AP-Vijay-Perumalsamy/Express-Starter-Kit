import catchAsync from "../utils/catchAsync";
import * as userService from "../services/user.service";
import { handleError, ErrorHandler } from "../config/error";
const errorText = "Error";

const getAll = catchAsync(async (req, res) => {
  const methodName = "/getAll";
  try {
    const category = await userService.getAll();
    res.send(category);
  } catch (err: any) {
    handleError(new ErrorHandler(errorText, methodName, err), res);
  }
});

export { getAll };
