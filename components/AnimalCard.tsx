import { Animal } from "@/hooks/useAnimals";
import InfoIcon from "@/icons/InfoIcon";

interface Props {
  animal: Animal;
  onSelect: (animal: Animal) => void;
}

export default function AnimalCard({ animal, onSelect }: Props) {
  return (
    <div className="bg-white border border-neutral-300 rounded-lg p-4 w-full mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: animal.color }}
          />
          <div>
            <h2 className="font-semibold text-base text-neutral-900">
              {animal.name}
            </h2>
            <p className="text-xs text-neutral-700">{animal.species}</p>
          </div>
        </div>
        <button className="cursor-pointer" onClick={() => onSelect(animal)}>
          <InfoIcon />
        </button>
      </div>

      <hr className="my-4 border-solid border-neutral-300" />

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-neutral-700 text-xs">Size</span>
          <div className="border-neutral-200 border-dashed border-b flex-1 mx-2" />
          <span className="capitalize text-neutral-500 text-xs">
            {animal.size}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-700 text-xs">Prey</span>
          <div className="border-neutral-200 border-dashed border-b flex-1 mx-2" />

          <span className="text-neutral-500 text-xs">{animal.prey.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-700 text-xs">Predators</span>
          <div className="border-neutral-200 border-dashed border-b flex-1 mx-2" />

          <span className="text-neutral-500 text-xs">
            {animal.predators.length}
          </span>
        </div>
      </div>
    </div>
  );
}
