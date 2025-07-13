import { getGenderService } from "@/modules/pets/services/gender-service";
import { getTypePetService } from "@/modules/pets/services/type-pet-service";
import { useEffect, useState } from "react";

const useTypeGenderPet = () => {
  const [genders, setGenders] = useState<GenderModelI[]>([]);
  const [types, setTypes] = useState<TypePetModelI[]>([]);

  useEffect(() => {
    const fetchDataInitial = async () => {
      try {
        const [genders, types] = await Promise.all([
          getGenderService(),
          getTypePetService(),
        ]);

        setGenders(genders.data.data);
        setTypes(types.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataInitial();
  }, []);

  return {
    genders,
    types,
  };
};

export default useTypeGenderPet;
