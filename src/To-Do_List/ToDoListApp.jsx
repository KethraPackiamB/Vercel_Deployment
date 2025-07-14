import { taskList } from './taskList';
import Form from 'react-bootstrap/Form';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export const ToDoListApp = () => {
  const [list, setList] = useAtom(taskList); 
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSave = () => {
    if (input.trim() !== "") {
      setList([...list, input]); 
      setInput(""); 
    }
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="container mt-4">
      <Form.Group className="mb-3 w-100" controlId="formGroupTask">
        <Form.Label>To-Do List</Form.Label>
        <Form.Control type="text" value={input} onChange={handleChange} placeholder="Enter a task" />
      </Form.Group>

      <Button variant="primary" onClick={onSave} className="mb-3">
        Add Task
      </Button>

      <ListGroup>
        {list.map((task, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {task}
            <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
