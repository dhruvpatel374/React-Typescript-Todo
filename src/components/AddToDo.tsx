import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
type AddTodoProps = {
  OnaddTodo: (title: string) => void;
};
const AddToDo = ({ OnaddTodo }: AddTodoProps) => {
  const [title, setTitle] = useState<string>("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    OnaddTodo(title);
    setTitle(""); // This should reset the input field
  };
  return (
    <div className="sticky top-0 z-50 bg-white pb-4">
      <div className="flex justify-center text-5xl m-5">
        <h1>ToDo App</h1>
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="flex gap-4 max-w-[560px] w-[95%] mx-auto m-5 h-12 lg:w-[500px] "
      >
        <input
          type="text"
          placeholder="Add Your Task"
          onChange={onChangeHandler}
          value={title}
          required
          className="p-2 px-4 rounded-md border outline-none focus-within:border-gray-400 border-gray-200 grow"
        />
        <Button className="basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base h-12">
          Add
        </Button>
      </form>
      <div className="w-full max-w-[760px] mx-auto">
        <div className="flex justify-center items-center">
          <h4 className="text-2xl">Your ToDos</h4>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
