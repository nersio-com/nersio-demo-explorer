"use client";

import { useState } from "react";
import { Animal } from "@/hooks/useAnimals";
import PreyPredatorTabs from "./PreyPredatorTabs";
import PreyIcon from "@/icons/PreyIcon";
import PredatorIcon from "@/icons/PredatorIcon";
import CloseIcon from "@/icons/CloseIcon";

interface Props {
  animal: Animal;
  onClose: () => void;
}

export default function AnimalSidebar({ animal, onClose }: Props) {
  const [view, setView] = useState<"prey" | "predators">("prey");

  const onCloseThenSelect = (a: Animal) => {
    onClose();
    window.dispatchEvent(new CustomEvent("animal-select", { detail: a }));
  };

  return (
    <aside className="w-[80%] sm:w-[60%] md:w-[320px] bg-white min-w-0 h-full md:flex flex-col absolute md:relative md:right-0 md:top-0 right-2 top-2 rounded-t-lg">
      <div className="sticky top-0 z-1 bg-white border border-neutral-300 p-2 flex items-center justify-between rounded-t-lg h-13">
        <h2 className="text-base font-semibold text-neutral-900 pl-2 py-2">
          {animal.name}
        </h2>
        <button className="cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      <div className="flex-1 h-screen overflow-y-auto p-4 flex flex-col gap-6 border-l border-r border-b border-neutral-300">
        <div className="flex flex-col items-center text-center">
          <div
            className="w-24 h-24 rounded-lg"
            style={{ backgroundColor: animal.color }}
          />
          <h3 className="mt-4 text-lg font-semibold text-neutral-900">
            {animal.name}
          </h3>
          <p className="text-neutral-700 text-sm">{animal.species}</p>
        </div>

        <div className="flex justify-center bg-neutral-100 p-1 rounded-md">
          <button
            onClick={() => setView("prey")}
            className={`flex items-center justify-center gap-1 px-4 py-1 text-sm rounded-sm transition-all flex-1 cursor-pointer ${
              view === "prey"
                ? "bg-white text-neutral-800 font-semibold shadow-sm"
                : "text-neutral-700"
            }`}
          >
            <PreyIcon />
            Prey
          </button>
          <button
            onClick={() => setView("predators")}
            className={`flex items-center justify-center gap-1 px-4 py-1 text-sm rounded-sm transition-all flex-1 cursor-pointer ${
              view === "predators"
                ? "bg-white text-neutral-800 font-semibold shadow-sm"
                : "text-neutral-700"
            }`}
          >
            <PredatorIcon />
            Predators
          </button>
        </div>

        {view === "prey" && (
          <PreyPredatorTabs
            animalIds={animal.prey}
            onSelect={onCloseThenSelect}
          />
        )}
        {view === "predators" && (
          <PreyPredatorTabs
            animalIds={animal.predators}
            onSelect={onCloseThenSelect}
          />
        )}
      </div>
    </aside>
  );
}
