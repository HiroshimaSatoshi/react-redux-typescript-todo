import * as React from "react";
import AddTodo from "./containers/AddTodo";
import VisivleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

export const App: React.SFC = () => {
  return (
    <div>
      <AddTodo />
      <VisivleTodoList />
      <Footer />
    </div>
  );
};
