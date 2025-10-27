import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <Toaster />
      <Textarea />
      <Input value={"default"} placeholder="입력 ..." />
      <Button
        onClick={() => {
          toast("토스트 버튼", { position: "top-center" });
        }}
      >
        토스트 버튼
      </Button>
      <Button variant={"destructive"}>버튼</Button>
      <div
        className={cn(
          "w-10 text-sm",
          isActive ? "text-green-400" : "text-red-400",
        )}
      >
        dd
      </div>
    </div>
  );
}

export default App;
