import {
  PayloadModel,
  ResponseLoginModel,
  LoginModel,
  RegisterModel,
} from "./auth-model";
import { PetModel, PetRequestModel } from "./pet-model";
import { PickImageModel } from "./pick-model";
import { SendResponseModel } from "./response-model";
import { StoryModel } from "./story-model";
import { UserModel } from "./user-model";

declare global {
  type SendResponseModelI<T> = SendResponseModel;
  type StoryModelI = StoryModel;
  type LoginModelI = LoginModel;
  type RegisterModelI = RegisterModel;
  type PayloadModelI = PayloadModel;
  type ResponseLoginModelI = ResponseLoginModel;
  type PickImageModelI = PickImageModel;

  type UserModelI = UserModel;
  type PetModelI = PetModel;
  type PetRequestModelI = PetRequestModel;
}
