import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

const TaskText = styled.p`
  font-size: 18px;
  color: #333;
  margin-right: 16px;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

class TaskList extends React.Component {
  state = {
    tasks: [
      { id: 1, text: 'Task 1', isCompleted: false },
      { id: 2, text: 'Task 2', isCompleted: false },
      { id: 3, text: 'Task 3', isCompleted: false }
    ]
  };

  addTask = () => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text: `Task ${this.state.tasks.length + 1}`,
      isCompleted: false
    };
    this.setState(prevState => ({ tasks: [...prevState.tasks, newTask] }));
  }

  removeTask = (taskId) => {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => task.id !== taskId) }));
  }

markTaskComplete = (taskId) => {
  this.setState(prevState => ({
    tasks: prevState.tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    })
  }));
};

  render() {
    return (
      <Container>
        {this.state.tasks.map(task => (
          <TaskItem key={task.id}>
            <TaskText style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.text}</TaskText>
            <Button onClick={() => this.markTaskComplete(task.id)}>{task.isCompleted ? 'Undo' : 'Complete'}</Button>
            <Button onClick={() => this.removeTask(task.id)}>Remove</Button>
          </TaskItem>
        ))}
        <Button onClick={this.addTask}>Add Task</Button>
      </Container>
    );
  }
}

export default TaskList;
