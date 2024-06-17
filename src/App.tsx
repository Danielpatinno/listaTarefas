import './App.styles.ts';
import { Container, MainContainer, TaskContainer } from './App.styles';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';
import { Task } from './components/TaskForm/TaskForm';
import { TaskList } from './components/Tasks';
import { ModalEdit } from './components/ModalEdit';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null)
  const [openModal,setOpenModal] = useState<boolean>(false)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const editTask = (task:Task):void => {
    setOpenModal(true)
    setTaskToUpdate(task)
  }  

  const closeModal = () => {
    setOpenModal(false)
  }

  const updateTask = (id: number, title:string, description:string, selectedValue:string) => {

    const updateTask: Task = {id, title, description, selectedValue}

    const updatedItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task
    })

    setTaskList(updatedItems)

    closeModal()
  }


  return (
    <Container >
      <Header />

      {openModal && <ModalEdit closeModal={closeModal} children={
        <TaskForm 
          btnText='Editar Tarefa'
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      }/>}

      <MainContainer>

        <TaskForm 
          taskList={taskList}
          setTaskList={setTaskList}
          btnText='Criar Tarefa' 
        />

        <TaskContainer>
          <h1>Tarefas</h1>

          <TaskList 
            handleDelete={deleteTask} 
            handleEdit={editTask}
            taskList={taskList}
          />
        </TaskContainer>

      </MainContainer>     
    </Container>
  );
}

export default App;
