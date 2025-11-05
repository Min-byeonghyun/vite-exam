import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosData() {
  const queryClient = useQueryClient();
  return useQuery({
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      }); //side Effect 순회 하면서 ["todos", "detail" , "id"] 에 todo 객체 저장용
      return todos.map((todo) => todo.id); // todos  배열 순회하면서 id ex) [1,2,3] id 만 저장
    },
    queryKey: QUERY_KEYS.todo.list,
  });
}
