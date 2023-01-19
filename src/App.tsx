import { Habit } from "./components/Habit";
import './styles/global.css';

function App() {
  return (
    <div className={"bg-zinc-900 w-full h-screen text-gray p-4 flex justify-center flex-col gap-4"}>
      <div className="flex flex-wrap gap-4 mx-auto">
        <Habit color="bg-purple-900"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-400"/>
        <Habit color="bg-purple-700"/>
        <Habit color="bg-purple-800"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-800"/>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <Habit color="bg-purple-700"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-400"/>
        <Habit color="bg-purple-900"/>
        <Habit color="bg-purple-800"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-800"/>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <Habit color="bg-purple-900"/>
        <Habit color="bg-purple-700"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-800"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-400"/>
        <Habit color="bg-purple-800"/>
      </div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <Habit color="bg-purple-900"/>
        <Habit color="bg-purple-100"/>
        <Habit color="bg-purple-800"/>
        <Habit color="bg-purple-400"/>
        <Habit color="bg-purple-800"/>
        <Habit color="bg-purple-700"/>
        <Habit color="bg-purple-100"/>
      </div>
    </div>
  )
}

export default App
