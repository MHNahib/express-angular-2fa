import { response } from "../utils";
import { StatusCodes } from "http-status-codes";
import { Request, RequestHandler, Response } from "express";

const homecontroller: RequestHandler = (req: Request, res: Response): void => {
  response(res, StatusCodes.ACCEPTED, true, { info: "Simple api" }, "OK");
};

export default homecontroller;
