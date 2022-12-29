import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import { useEffect, useState } from "react";
import { selectorTodos } from "../Redux/selector";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoselector=useSelector(selectorTodos)

  const [todo, setTodo] = useState("");
  const [preioty, setpreioty] = useState('Medium');
  const handleSubmitAdd = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        Completed: false,
        priorities: preioty,
      })
    );
    // dispatch({ type: 'todos/todoAdded', payload: {
    //   id: uuidv4(),
    //   name: todo,
    //   priorities: preioty,
    // } });
    setpreioty('Medium');
  };
  const handleInputTodo = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };
  const handleInputPerioty = (e) => {
    setpreioty(e);
    console.log(e);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoselector?.map((value)=><Todo key={value.id} name={value.name} prioriry={value.priorities} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputTodo} />
          <Select defaultValue="Medium" value={preioty} onChange={handleInputPerioty}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" value={todo} onClick={handleSubmitAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
