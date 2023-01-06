import { useCallback } from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createTask = useCallback((taskText, data) => {
    const generatedId = data.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }, []);

  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest,
  } = useHttp(createTask);

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: `${process.env.REACT_APP_API_KEY}tasks.json`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
