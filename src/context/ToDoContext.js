import { createContext, useState } from "react";

export const ToDoContext = createContext({
    data: [{}],
    setData: () => { },
    newTask: {},
    setNewTask: () => { }
});

const initData = [
    {
        "id": 1,
        "name": "LEARN REACT JS BASIC",
        "isCompleted": false,
        "deadline": '2021-09-09'
    },
    {
        "id": 2,
        "name": "LEARN REACT HOOKS",
        "isCompleted": false,
        "deadline": '2021-09-10'
    },
    {
        "id": 3,
        "name": "DO EXERCISE ABOUT TODO APP",
        "isCompleted": true,
        "deadline": '2021-10-10'
    },
    {
        "id": 4,
        "name": "LEARN FASTAPI BASIC",
        "isCompleted": false,
        "deadline": '2021-10-20'
    },
    {
        "id": 5,
        "name": "LEARN MONGODB",
        "isCompleted": true,
        "deadline": '2021-10-27'
    }
];

export const ToDoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    const [task, setTask] = useState({
        id: 0,
        name: '',
        isCompleted: false,
        deadline: ''
    })
    return (
        <ToDoContext.Provider value={{
            data: myData,
            setData: setMyData,
            newTask: task,
            setNewTask: setTask
        }}>
            {children}
        </ToDoContext.Provider>
    )
};