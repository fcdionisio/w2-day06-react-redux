import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateSalary, demoteSalary } from "./action";
import { Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const FuncViewEmployee = () => {
    const empData = useSelector((state) => state.employeeData)
    //console.log("from Func View");
    //console.log(empData);
    const dispatch = useDispatch();

    return (
        <>
                <Container maxWidth="xl"  >
                <Typography variant='h4' align='center' color={"error"} gutterBottom>
                        Update Salary Using FUNCTION Component
                    </Typography>                    
                    <Grid container spacing={3} justifyContent="center">
                        {empData.map((employee) => {
                            return (
                                <React.Fragment key={employee.id}>
                                    <Grid item>
                                        <Card sx={{ maxWidth: 345, backgroundColor: "paper" }}>
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image={employee.profilePic}
                                                title="Card Title"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {employee.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    SALARY : {employee.salary}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    AGE : {employee.Age}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button
                                                    size="small"
                                                    variant='contained'
                                                    color="success"
                                                    onClick={() => dispatch(updateSalary(employee))}
                                                >
                                                    +500 Salary
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant='contained'
                                                    color="error"
                                                    onClick={() => dispatch(demoteSalary(employee))}
                                                >
                                                   -500 Salary
                                                </Button>                                                
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </React.Fragment>

                            )
                        })}
                    </Grid>
                </Container>

        </>
    );
};

export default FuncViewEmployee;