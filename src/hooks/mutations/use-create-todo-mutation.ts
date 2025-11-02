import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient(); // 쿼리클라이언트 store 모든 데이터를 저장하는 저장소

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, //요청 발송
    onSettled: () => {}, // 요청 종료
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    }, // 요청 성공
    onError: (error) => {
      window.alert(error.message);
    }, // 요청 실패
  });
}
