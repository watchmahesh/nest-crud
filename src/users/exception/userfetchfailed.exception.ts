/* eslint-disable prettier/prettier */
import { HttpStatus } from "@nestjs/common";
import { AbstractException } from "../../lib/exception/abstract.exception";

export class UserFetchFailedException extends AbstractException{
  private readonly error;
  constructor(error,message = 'User details fetch operation failed.') {
    // eslint-disable-next-line prettier/prettier
    super(message,HttpStatus.BAD_REQUEST);
    this.error = error;
  }

  getError() {
    return this.error;
  }
}