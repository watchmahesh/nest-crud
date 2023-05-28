/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Response } from 'express';

export abstract class AbstractController {
  successResponse(
    res: Response,
    message = null,
    data ,
    statusCode = 200,
    responseCode = null,
  ) {
    this.response(res, true, message, data, statusCode, responseCode);
  }

  response(response: Response,success,message = null,data,statusCode = 200,responseCode = null,headers = [],
  ) {
    let jsonBody : {responseCode?,success: boolean, statusCode: number, message?, data?} = {
      success,
      statusCode
    };
    if(message) {
      jsonBody.message = message;
    }
    if(responseCode) {
      jsonBody.responseCode = responseCode;
    }
    if(data) {
      jsonBody.data = data;
    }
      return response.status(statusCode).json(jsonBody);
  }
}
