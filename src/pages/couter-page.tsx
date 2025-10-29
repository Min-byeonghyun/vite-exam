import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCountStore();

  return (
    <div>
      <h1 className="text-2xl font-bold">counter</h1>
      <div>{count}</div>
      <div className="flex gap-2">
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </div>
    </div>
  );
}
