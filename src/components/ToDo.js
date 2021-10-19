import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import moment from "moment";

export const ToDoList = () => {
  const { data, setData, newTask, setNewTask } = useContext(ToDoContext);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newData = data.slice(0);
    const newItem = {
      id: data.length + 1,
      name: newTask.name,
      deadline: newTask.deadline,
      isCompleted: false,
    };
    for (var i = 0; i < data.length; ++i) {
      const d1 = new Date(data[i].deadline).getTime()
      const d2 = new Date(newTask.deadline).getTime()
      const d3 = new Date(data[data.length - 1].deadline).getTime()
      
      if (d2 > d3) {
        setData([...newData, newItem]);
        break;
      } else if (d2 < d1) {
        newData.splice(i, 0, newItem)
        setData(newData);
        break;
      }
    }
  };
  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
        <div className="center">
            <Card>
            <CardHeader title="TODO LIST" />
            <Divider />
            <CardContent>
                <Grid container spacing={6}>
                <Grid item md={12} xs={12}>
                    <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={newTask.name}
                    variant="outlined"
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField
                    fullWidth
                    id="deadline"
                    name="deadline"
                    label="Deadline"
                    type="date"
                    onChange={handleChange}
                    value={newTask.deadline}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <Box
                sx={{
                display: "flex",
                justifyContent: "center",
                p: 2,
                }}
            >
                <Button
                onClick={HandleSubmit}
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
                >
                Submit
                </Button>
            </Box>
            </Card>
        </div>
        <br />
        <div className="center">
            <Card>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{moment(item.deadline).format("DD-MM-yyyy")}</TableCell>
                                    <TableCell>{item.isCompleted ? "Done" : "Inprogress"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Card>
        </div>
    </div>
  );
};
