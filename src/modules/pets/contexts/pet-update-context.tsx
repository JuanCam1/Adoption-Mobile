import { createContext, use, useState, type ReactNode } from "react";

interface PetContextType {
  selectedPet: PetListModelI | null;
  setSelectedPet: (pet: PetListModelI | null) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPet, setSelectedPet] = useState<null | PetListModelI>(null);

  return (
    <PetContext value={{ selectedPet, setSelectedPet }}>{children}</PetContext>
  );
};

export const usePetContext = () => {
  const context = use(PetContext);
  if (!context) {
    throw new Error("usePet must be used within a PetProvider");
  }
  return context;
};
