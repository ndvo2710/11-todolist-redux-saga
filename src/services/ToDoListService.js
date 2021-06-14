import Axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem"

export class TodoListService {

    getTaskApi = () => {
        return Axios({
            url: `${DOMAIN}/ToDoList/GetAllTask`,
            method: 'GET'
        })
    }
}

export const todoListService = new TodoListService();