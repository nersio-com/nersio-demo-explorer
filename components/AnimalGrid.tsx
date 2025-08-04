import { Animal } from "@/hooks/useAnimals";
import AnimalCard from "./AnimalCard";

interface Props {
  animals: Animal[];
  onSelect: (animal: Animal) => void;
}

export default function AnimalGrid({ animals, onSelect }: Props) {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] xl:grid-cols-4 gap-4 bg-neutral-50 rounded-t-lg justify-center">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} onSelect={onSelect} />
      ))}
    </div>
  );
}
