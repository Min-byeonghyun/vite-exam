import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updatedTodo } = useUpdateTodoMutation();
  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    updatedTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type="checkbox"
          checked={isDone}
          onClick={handleCheckboxClick}
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        onClick={handleDeleteClick}
        variant={"destructive"}
        disabled={isDeleteTodoPending}
      >
        삭제
      </Button>
    </div>
  );
}
