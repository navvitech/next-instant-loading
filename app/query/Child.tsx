"use client";

import { FC } from "react";
import { useSuspenseQuery, useQuery } from "@tanstack/react-query";

export const Child: FC<{}> = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["query", "a"],
    queryFn: async () => {
      console.log("in query function");
      await new Promise((res) => setTimeout(res, 3000));

      return {
        tasks: [
          { id: 1, name: "Task 1" },
          { id: 2, name: "Task 2" },
          { id: 3, name: "Task 3" },
        ],
      };
    },
    staleTime: 30000,
    refetchInterval: 20000,
    refetchOnMount: false,
  });

  return data ? (
    <div>
      {data.tasks.map((t) => (
        <div key={t.id}>
          <h1>{t.name}</h1>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
