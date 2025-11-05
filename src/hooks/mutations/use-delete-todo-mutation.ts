import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess : (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if(!prevTodos) return [];
        return prevTodos.filter((prevTodo)=> prevTodo.id !== deletedTodo.id )
      })
    }

    // 캐시 무효화 -> invalidateQueries
    // 수정 요청의 응답값 활용 -> onSuccess
    // 낙관적 업데이트 -> onMutate
  });
}
