import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    staleTime: 300000,
    gcTime: 5000, // 캐시 메모리에서 삭제

    // refetchOnMount : false,
    // refetchOnWindowFocus : false,
    // refetchOnReconnect : false,
    // refetchInterval: false,
  });
}
