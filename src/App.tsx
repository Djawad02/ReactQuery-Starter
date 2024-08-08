import { useReducer } from "react";
import "./App.css";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
