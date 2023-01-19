interface HabitProps{
  color: string
}

export function Habit({color} : HabitProps){
  return (
    <div
      className={`${color} w-10 h-10 rounded m-2 text-center`}
    ></div>
  );
}