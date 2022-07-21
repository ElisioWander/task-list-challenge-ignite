import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InputHTMLAttributes, InvalidEvent } from "react";

import styles from "./Form.module.scss";

interface FormProps {
  newTask: string;
  onCreateNewTask: (event: FormEvent) => void;
  onGetInputText: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Form({ newTask, onCreateNewTask, onGetInputText }: FormProps) {
  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('Este campo é obrigatório')
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <form onSubmit={onCreateNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={newTask}
        required
        onInvalid={handleNewCommentInvalid}
        onChange={onGetInputText}
      />

      <button type="submit" disabled={isNewTaskEmpty} >
        Criar
        <PlusCircle size={16} weight={"bold"} />
      </button>
    </form>
  );
}
