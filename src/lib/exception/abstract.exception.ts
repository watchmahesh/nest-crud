/* eslint-disable prettier/prettier */
import { HttpException } from "@nestjs/common";

export class AbstractException extends HttpException{
  public getData() {
    return '';
  }

  public getError() {
    return null;
  }
}