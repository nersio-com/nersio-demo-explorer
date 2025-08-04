"use client";

import { useAnimals, Animal } from "@/hooks/useAnimals";

interface Props {
  animalIds: number[];
  onSelect: (animal: Animal) => void;
}

export default function PreyPredatorTabs({ animalIds, onSelect }: Props) {
  const { data: allAnimals = [] } = useAnimals();

  const related = allAnimals.filter(a => animalIds.includes(Number(a.id)));

  if (related.length === 0) return null;

  return (
    <section className="mt-4">
      <div className="space-y-2">
        {related.map(a => (
          <button
            key={a.id}
            onClick={() => onSelect(a)}
            className="w-full flex items-center gap-2 px-2 py-1 hover:bg-neutral-50 rounded text-left cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: a.color }}
            />
            <div className="flex flex-col gap-1">
              <div className="text-sm text-neutral-900">{a.name}</div>
              <div className="text-neutral-500 text-xs">{a.species}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
