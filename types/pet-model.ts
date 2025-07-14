
export interface PetModel {
  name: string;
  description: string;
  location: string;
  typeId: string;
  genderId: string;
  age: string;
  breed: string;
  userId: string;
  picture: string;
}

export interface ListPetByUserModel {
  pets: PetListModel[]
  total: number
  currentPage: number
  totalPages: number
}

export interface PetListModel {
  id: string
  name: string
  genderId: number
  description: string
  createdAt: string
  updatedAt: string
  breed: string
  statePet: string
  location: string
  latitude: number
  longitude: number
  typeId: number
  delete: boolean
  age: string
  userId: string
  pathPicture: string
  filenamePicture: string
  type: TypePetModelI
  gender: GenderModelI
  stateId: number
}

