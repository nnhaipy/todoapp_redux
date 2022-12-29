import "./App.css";
import { Typography, Divider } from 'antd';
import Todo from "./Component/Todo";
import Filters from "./Component/Filters";
import TodoList from "./Component/TodoList";

const { Title } = Typography;

function App() {
  return (
    <div className="Appcontainer">
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
