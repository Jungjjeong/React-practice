import Task from "../components/Task";

export default {
  title: "TodoComponent/Task",
  component: Task,
};

export const Default = () => {
  const task = {
    content: "TIL 작성하기",
    complete: false,
  };
  return <Task content={task.content} complete={task.complete} />;
};
