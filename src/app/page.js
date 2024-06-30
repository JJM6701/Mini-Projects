import ColourChanger from "@/components/colourChanger";
import ColourPicker from "@/components/colourPicker";
import ToDoList from "@/components/toDoList";

export default function Home() {
  return (
    <main>
      <ToDoList />
      <ColourChanger />
      <ColourPicker />
    </main>
  );
}