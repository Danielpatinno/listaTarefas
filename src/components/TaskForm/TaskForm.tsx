import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { 
  FormContainer,
  LabelContainer
} from "./TaskForm.styles";

export interface Task {
  id: number;
  title: string;
  description: string;
  selectedValue: string;
}

interface TaskFormProps {
  btnText: string;
  taskList: Task[]
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>
  task?:Task | null
  handleUpdate?(id: number, title:string, description:string, selectedValue: string):void
}

export function TaskForm({btnText, taskList, setTaskList,task, handleUpdate}:TaskFormProps) {
  const [ id, setId ] = useState<number>(0)
  const [ title, setTitle ] = useState<string>("")
  const [ description, setDescription] = useState<string>('')

  useEffect(() => {

    if(task) {
      setId(task.id)
      setTitle(task.title)
      setDescription(task.description)
    }

  }, [task])

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => { 
    e.preventDefault();

    if(!title || !description) {
      return alert('Necessário título e descrição para a tarefa.')
    }

    if(handleUpdate) {
      handleUpdate(id, title, description, selectedValue)
    } else {
    const id = Math.floor(Math.random() * 1000)
    const newTask:Task = {id, title, description, selectedValue}

    setTaskList!([...taskList, newTask])

    setTitle("")
    setDescription('')      
    }


  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
        setTitle(e.target.value)
    } else if(e.target.name === "description") {
      setDescription(e.target.value)
  }

  }

  const [selectedValue, setSelectedValue] = useState('Baixa');


  const handleChangeT = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormContainer onSubmit={addTaskHandler}>
      <LabelContainer>
        <label>Título</label>
        <input 
          type="text" 
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </LabelContainer>

      <LabelContainer>
        <label htmlFor="">Descrição</label>
        <input 
          type="text" 
          name="description"
          placeholder="Descrição"
          onChange={handleChange}
          value={description}
        />
      </LabelContainer>      

      <LabelContainer>
        <label>Prioridade</label>
        <select name="prioridade" value={selectedValue} onChange={handleChangeT}>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>
      </LabelContainer>


      <input type="submit" value={btnText}/>
    </FormContainer>
  )
}
