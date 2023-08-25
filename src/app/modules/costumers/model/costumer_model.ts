export interface CostumerModel {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: GenderEnum;
  address?: string;
  city?: string;
  state?: string;
}

export enum GenderEnum {
  MALE = 0,
  FEMALE = 1,
}
