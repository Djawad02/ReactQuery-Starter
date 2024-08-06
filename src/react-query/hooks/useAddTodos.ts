import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoSevice, { Todo } from "../services/todoSevice";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
    previousTodos: Todo[];
  }

const useAddTodos = (onAdd : () => void)=> {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: todoSevice.post,
      onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
          newTodo,
          ...todos,
        ]);
        onAdd();
       
        return { previousTodos };
      },
      onSuccess: (saveTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
          todos?.map((todo) => (todo === newTodo ? saveTodo : todo))
        );
      },
      onError: (error, newTodo, context) => {
        if (!context) return;
  
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
      },
    });

}

export default useAddTodos;