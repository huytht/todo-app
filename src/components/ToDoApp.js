import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import moment from "moment";

export const ToDoApp = () => {
    const { data, setData } = useContext(ToDoContext)
    const handleComplete = (idx) => {
        const newValue = data;
        newValue[idx].isCompleted = true;
        setData([...newValue]);
    }

    const handleDelete = (idx) => {
        const removedList = data.filter((_, index) => index !== idx)

        setData(removedList);
    }

    return (
        <div>
            <h2>TIMELINE</h2>
            <Timeline lineColor={'#ddd'}>
                {data.map((item, idx) => {
                    return (
                        <TimelineItem
                            key={item.id}
                            dateText={moment(item.deadline).format("DD-MM-yyyy")}
                            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                            bodyContainerStyle={{
                            background: 'rgba(0,0,0,0.05)',
                            padding: '20px',
                            opacity: '2',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                            
                            style={!item.isCompleted ? { textAlign: 'center', color: "rgb(255, 14, 14)" } : { textAlign: 'center', color: "rgb(66, 186, 150)" }}
                        >
                            <h3 style={{ color: 'black' }}>{item.name}</h3>
                            <h4 style={{ color: 'black' }}>{moment(item.deadline).format("DD-MM-yyyy")}</h4>
                            <h5 style={{ color: 'black' }}>Status: <b style={item.isCompleted ? {color: 'rgb(66, 186, 150)'} : {color: 'rgb(255, 14, 14)'}}>{item.isCompleted ? "Done" : "Inprogress"}</b></h5>
                            {!item.isCompleted ? (
                                <button onClick={() => handleComplete(idx)} style={{ border: 'none' }}>
                                    <CheckCircleOutlineIcon style={{ color: 'rgb(66, 186, 150)' }} />
                                </button>
                                )
                                : ''
                            }
                            <button onClick={() => handleDelete(idx)} style={{ border: 'none' }}>
                                <DeleteOutlineIcon style={{ color: 'rgb(255, 14, 14)' }} />
                            </button>
                        </TimelineItem>  
                    )
                })}
            </Timeline>
        </div>
    )
}