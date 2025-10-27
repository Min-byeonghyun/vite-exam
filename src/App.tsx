import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { ChefHat } from "lucide-react";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <ChefHat className="h-10 w-10 fill-red-500" />
      <AlertDialog>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Description</AlertDialogDescription>
          <div>body</div>
          <div>
            <AlertDialogAction>Continue</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>Body</div>
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button>열기</Button>
        </PopoverTrigger>
        <PopoverContent>컨텐츠!</PopoverContent>
      </Popover>
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
