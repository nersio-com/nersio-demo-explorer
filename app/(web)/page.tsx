"use client";

import { useAnimals, Animal } from "@/hooks/useAnimals";
import AnimalGrid from "@/components/AnimalGrid";
import Header from "@/components/Header";
import AnimalSidebar from "@/components/AnimalSidebar";
import { useMemo, useState, useEffect } from "react";

export default function HomePage() {
  const { data: animals = [], isLoading, isError } = useAnimals();
  const [query, setQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return animals.filter(
      a =>
        a.name.toLowerCase().includes(q) || a.species.toLowerCase().includes(q)
    );
  }, [animals, query]);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setSelectedAnimal(e.detail);
    };

    window.addEventListener("animal-select", handler as EventListener);

    return () => {
      window.removeEventListener("animal-select", handler as EventListener);
    };
  }, []);

  return (
    <main className="w-full max-w-[1600px] mx-auto h-screen flex gap-2 overflow-hidden pt-2 px-2 bg-neutral-200">
      <div className="flex-1 flex flex-col">
        <Header query={query} setQuery={setQuery} />
        <div className="flex-1 w-full mx-auto overflow-y-auto p-4 bg-gray-50">
          {isLoading && <p>Loading animals...</p>}
          {isError && <p>Failed to load animals.</p>}
          <AnimalGrid animals={filtered} onSelect={setSelectedAnimal} />
        </div>
      </div>

      {selectedAnimal && (
        <AnimalSidebar
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </main>
  );
}
