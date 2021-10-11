import { NotFound } from '../components/NotFound';
import { ToDoApp } from '../components/ToDoApp';
import { About } from '../components/About';
import { ToDoList } from '../components/ToDo';

export const routes = [
    {
        path: "/timeline",
        component: ToDoApp,
        label: "Timeline"
    },
     {
        path: "/todo",
        component: ToDoList,
        label: "TODO"
    },
    {
        path: "/about",
        component: About,
        label: "About"
    },
    {
        path: "*",
        component: NotFound,
    }
];