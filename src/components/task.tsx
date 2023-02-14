import { Itasks } from "../models/tasks";

interface ItaskProps {
  pTask: Itasks[];
  removepTask(i: number): void;
  toggleTodo(i: number): void;
}

export const Task = (props: ItaskProps) => {
  const handleClick = (i: number) => {
    props.removepTask(i);
  };

  const handlechecked = (i: number) => {
    props.toggleTodo(i);
  };

  let html = props.pTask.map((p, i) => {
    return (
      <div key={i}>
        <h3 className={p.done ? "strike" : ""}>{p.task}</h3>
        <input
          type="checkbox"
          onChange={() => {
            handlechecked(i);
          }}
        ></input>
        <button
          onClick={() => {
            handleClick(i);
          }}
        >
          Ta bort
        </button>
      </div>
    );
  });
  return <>{html}</>;
};

export default Task;
