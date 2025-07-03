export interface UserModel {
  name: string;
  id: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  stateId: number;
  role: String;
  pathPicture: string;
  filenamePicture: string;
}
