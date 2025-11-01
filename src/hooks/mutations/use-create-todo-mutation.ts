import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, //요청 발송
    onSettled: () => {}, // 요청 종료
    onSuccess: () => {
      window.location.reload();
    }, // 요청 성공
    onError: (error) => {
      window.alert(error.message);
    }, // 요청 실패
  });
}
