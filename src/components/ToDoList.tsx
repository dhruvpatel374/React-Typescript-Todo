import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";

type ToDoListProps = {
  item: {
    title: string;
    isCompleted: boolean;
    id: string;
  }[];
};

type OnremoveTodoProps = {
  OnremoveTodo: (id: string) => void;
};

const ToDoList = ({
  item,
  OnremoveTodo,
}: ToDoListProps & OnremoveTodoProps) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-[760px]">
        <div>
          {item.map((todo) => {
            return (
              <div
                key={todo.id}
                className="flex justify-between items-center  bg-black shadow-lg mx-5 px-4 py-2 rounded-md mt-5 text-white hover:cursor-pointer"
              >
                <p>{todo.title}</p>
                <Button
                  className="bg-red-600 w-6 h-6 hover:bg-red-500"
                  onClick={() => OnremoveTodo(todo.id)}
                >
                  <TrashIcon className="text-white" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
