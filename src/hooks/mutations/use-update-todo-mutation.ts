import { updateTodo } from "@/api/update-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "@/types";
import { QUERY_KEYS } from "@/lib/constants";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updateTodo }
            : prevTodo,
        );
      });
    },
  });
}
