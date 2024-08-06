import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoSevice, { Todo } from "../services/todoSevice";



const useTodos = () =>{
    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: todoSevice.getAll,
        staleTime:10*1000
          });
}

export default useTodos;