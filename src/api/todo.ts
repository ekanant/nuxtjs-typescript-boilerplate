/* eslint-disable */
import axios, { AxiosResponse } from 'axios'

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = async ():Promise<Todo[]> => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos').then((response: AxiosResponse<Todo[]>) => {
    const { data } = response
    return data
  })
}
