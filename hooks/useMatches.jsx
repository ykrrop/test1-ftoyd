"use client";

import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error: Failed to fetch data");
  return res.json();
};

const useMatches = () => {
  const { data, error, mutate, isValidating } = useSWR(
    "https://app.ftoyd.com/fronttemp-service/fronttemp",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 2000,
    }
  );

  return {
    matches: data?.data?.matches ?? [],
    isLoading: !error && !data,
    isValidating,
    isError: error,
    refresh: mutate,
  };
};

export default useMatches;
