import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSalary, demoteSalary } from "./action";
import { Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

class ViewEmployee extends Component {
    render() {
        return (
            <>
                <Container maxWidth="xl"  >
                    <Typography variant='h4' align='center' color={"textPrimary"} gutterBottom>
                        Update Salary Using CLASS Component
                    </Typography>
                </Container>
                <Container maxWidth="xl"  >
                    <Grid container spacing={3} justifyContent="center">
                        {this.props.empData.map((employee) => {
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
                                                    color="info"
                                                    onClick={() => this.props.upSalary(employee)}
                                                >
                                                    +500 Salary
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant='contained'
                                                    color="warning"
                                                    onClick={() => this.props.downSalary(employee)}
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

    }
}

const mapStateToProps = (state) => {
    return {
        empData: state.employeeData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upSalary: (value) => dispatch(updateSalary(value)),
        downSalary: (value) => dispatch(demoteSalary(value)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);