"use client";

import SearchIcon from "@/icons/SearchIcon";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

export default function Header({ query, setQuery }: Props) {
  return (
    <header className="sticky w-full max-w-[1600px] left-0 right-0 mx-auto h-13 px-4 py-3 border border-neutral-300 bg-white flex flex-row items-center justify-between gap-3 rounded-t-lg">
      <h1 className="text-base font-semibold text-neutral-900">
        Animal Finder
      </h1>

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search"
        className="sm:w-40 md:w-80 w-35 pl-6 pr-3 py-2 bg-neutral-100 rounded-lg focus:outline-none text-sm text-neutral-800 placeholder-neutral-500"
      />
      <div className="absolute right-7">
        <SearchIcon />
      </div>
    </header>
  );
}
