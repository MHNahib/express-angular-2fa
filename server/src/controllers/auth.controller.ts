import { UserModel } from "../db/models/user.model";
import { compareHash, generateHash, response, signToken } from "../utils";
import { StatusCodes } from "http-status-codes";
import { Request, RequestHandler, Response } from "express";
import { CrudService } from "../services";
import { User } from "../db/entity/user.entity";
import { AppDataSource } from "../config";

const userCrudService = new CrudService(User);

export const signupcontroller: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return response(res, StatusCodes.BAD_REQUEST, false, null, "Bad request");

    const is2faEnabled = req.body?.is2faEnabled || false;

    const user = await userCrudService.create({
      email,
      password: await generateHash(password),
      is2FAEnabled: is2faEnabled,
      twoFaSecret: "",
    } as UserModel);

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);

    return response(res, StatusCodes.ACCEPTED, true, null, "OK");
  } catch (error) {
    console.log(error);

    return response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      false,
      null,
      "Internal server error"
    );
  }
};

export const logincontroller: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return response(res, StatusCodes.BAD_REQUEST, false, null, "Bad request");

    const user = await userCrudService.getByKey("email", email);

    if (!user)
      return response(
        res,
        StatusCodes.BAD_REQUEST,
        false,
        null,
        "No user found!"
      );

    if (!(await compareHash(password, user.password)))
      return response(
        res,
        StatusCodes.BAD_REQUEST,
        false,
        null,
        "Email or password incorrect!"
      );

    const token = await signToken(user.email);

    const data = {
      token,
      is2FAEnabled: user.is2FAEnabled,
    };

    return response(res, StatusCodes.ACCEPTED, true, data, "Success !");
  } catch (error) {
    console.log(error);

    return response(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      false,
      null,
      "Internal server error"
    );
  }
};
