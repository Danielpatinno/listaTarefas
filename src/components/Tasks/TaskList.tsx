import { Task } from "../TaskForm/TaskForm";
import { ButtonsContainer, Container, TaskContainer, TitleContainer } from "./TaskList.styles";

import { MdEdit, MdDelete  } from "react-icons/md";


interface TaskListProps {
  taskList: Task[];
  handleDelete(id:number): void;
  handleEdit(task:Task):void;
}

export function TaskList({
  taskList, 
  handleDelete, 
  handleEdit
}:TaskListProps) {

  return (
    <Container>
      {taskList.map((task) => (
        <TaskContainer prioridade={task.selectedValue}>
          <TitleContainer>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.description}</p>
            <p>Prioridade: {task.selectedValue}</p>
          </TitleContainer>

          <ButtonsContainer>
            <MdEdit title="Editar" size={25} onClick={() => handleEdit(task)} />
            <MdDelete title="Deletar" size={25} onClick={() => handleDelete(task.id)}/>
          </ButtonsContainer>
        </TaskContainer>
      ))}
    </Container>
  )
}