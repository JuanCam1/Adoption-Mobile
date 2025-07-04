


export interface PetModel {
  name: string;
  description: string;
  location: string;
  typeId: string;
  genderId: string;
  age: string;
  breed: string;
  userId: string;
  picture: PickImageModelI;
}

export interface PetRequestModel {
  name: string;
  description: string;
  location: string;
  typeId: string;
  genderId: string;
  age: string;
  breed: string;
  userId: string;
  picture: PickImageModelI;
}