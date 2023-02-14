import { ChangeEvent, FormEvent, useState } from "react";
import { Itasks } from "../models/tasks";

interface IAddtaskProps {
  includeTask(p: Itasks): void;
}

export const Addtask = (props: IAddtaskProps) => {
  const [task, setTask] = useState<Itasks>({
    id: 0,
    task: "",
    done: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.includeTask(task);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleChange}
          value={task.task}
        />
        <button type="submit">Skicka</button>
      </form>
    </>
  );
};

export default Addtask;
