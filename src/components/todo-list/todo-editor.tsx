import { useCreateTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function TodoEditor() {
  const CreateTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    CreateTodo(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        placeholder="새로운 할 일을 입력하세요..."
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
