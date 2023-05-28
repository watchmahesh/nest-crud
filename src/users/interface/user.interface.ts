/* eslint-disable prettier/prettier */
export interface UserInterface{
    fullName:string,
    isActive:boolean
}

export interface UserListRequest {
    attributes: QueryList;
  
  }

  interface QueryList {
    page?: number;
    order?: string;
    offset?: number;
    limit?: number;
  }