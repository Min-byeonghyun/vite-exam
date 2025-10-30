import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  return (
    <div className="flex gap-2">
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
