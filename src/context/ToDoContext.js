import { createContext, useState } from "react";

export const ToDoContext = createContext({
    data: [],
    setData: () => { },
    name: '',
    setName: () => { },
    deadline: '',
    setDeadline: () => { }
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
        "deadline": '2021-10-09'
    },
    {
        "id": 3,
        "name": "DO EXERCISE ABOUT TODO APP",
        "isCompleted": true,
        "deadline": '2021-10-10'
    },
    {
        "id": 4,
        "name": "LEARN FastAPI BASIC",
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
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    return (
        <ToDoContext.Provider value={{
            data: myData,
            setData: setMyData,
            name: taskName,
            setName: setTaskName,
            deadline: taskDeadline,
            setDeadline: setTaskDeadline
        }}>
            {children}
        </ToDoContext.Provider>
    )
};