import { updateTodo } from "@/api/update-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.todo.list });
      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list); // 캐시데이터 가져오기
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });
      return {
        prevTodos, //캐시데이터 반환
      };
    },
    onError: (error, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    },
  });
}
