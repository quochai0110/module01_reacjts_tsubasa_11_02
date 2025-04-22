import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          <TaskItem></TaskItem>
        </ul>
      </div>
    </div>
  );
}
