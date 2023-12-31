import { TiTimes } from "react-icons/ti";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h4>
        {task.text}{" "}
        <TiTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
