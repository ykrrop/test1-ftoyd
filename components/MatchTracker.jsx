"use client";

import React, { useMemo } from "react";
import useMatches from "../hooks/useMatches";
import MatchCard from "./MatchCard";
import ErrorMessage from "./ErrorMessage";
import Image from "next/image";
import MatchSkeleton from "./MatchSkeleton";

const MatchTracker = () => {
  const { matches, isLoading, isValidating, isError, refresh } = useMatches();

  const matchList = useMemo(() => {
    return matches.map((match) => (
      <MatchCard key={match.title} match={match} />
    ));
  }, [matches]);

  return (
    <div className="p-[42px]">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Match Tracker</h1>
        <button
          onClick={() => refresh()}
          className="bg-[#EB0237] text-white font-bold flex items-center justify-center gap-[10px] w-[204px] h-[56px] rounded-[4px] p-[16px] hover:bg-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isValidating}
          aria-label="Обновление данных матчей"
        >
          {isValidating ? "Обновление..." : "Обновить"}
          <Image
            src="/img/refresh.svg"
            alt="Refresh icon"
            width={20}
            height={20}
          />
        </button>
      </div>

      {isLoading && (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <MatchSkeleton key={index} />
          ))}
        </div>
      )}

      {!isLoading && isError && (
        <ErrorMessage message="Ошибка: не удалось загрузить данные матчей" />
      )}

      {!isLoading && !isError && matches.length === 0 && (
        <p className="text-center text-gray-500 text-lg">Нет матчей</p>
      )}

      {!isLoading && !isError && matches.length > 0 && (
        <section
          className="space-y-4 mt-5 transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in"
          aria-live="polite"
        >
          {matchList}
        </section>
      )}
    </div>
  );
};

export default MatchTracker;
