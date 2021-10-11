import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';


// Arrow Function components
export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline } = useContext(ToDoContext);
    const handleClick = (e) => {
        e.preventDefault();
        const newData = data.slice(0); // copy
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
        for(var i = 0; i < data.length; ++i) {
            const d1 = Date.parse(data[i].deadline)
            const d2 = Date.parse(deadline)
            const d3 = Date.parse(data[data.length - 1].deadline)
            if (d2 > d3) {
                setData([...newData, newItem]);
                break;
            } else if (d2 < d1) {
                newData.splice(i, 0, newItem);
                setData(newData)
                break;
            }
        }
        setName('');
        setDeadline('');
    }
    return (
        <div>
            <h2>TODO LIST</h2>
             <table style={{border: '1px solid blue', marginLeft: 'auto', marginRight: 'auto'}}>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>
                        <input value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Deadline:</td>
                        <td>
                            <input value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button onClick={handleClick}>Thêm</button>
                        </td>
                    </tr>
                </tfoot>
             </table>
             <br />
            {data.map((item) => {
                //process js

                return (
                    <div key={item.id}>
                        {item.name} - {item.deadline} : { item.isCompleted ? 'DONE' : 'INPROGRESS'}
                    </div>
                )
            })}
        </div>
    )
};