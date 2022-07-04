import React, { ChangeEvent, useState } from "react";
import { EmploymentStatus } from "../utils/models";
import { TextField, Button, Grid, Card, Typography, FormControl, Select, SelectChangeEvent, MenuItem, InputLabel } from "@mui/material";
import { updateUser } from "../utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
    const navigate = useNavigate()
    const [formVals, setFormVals] = useState({
        employment_status: EmploymentStatus.EMPLOYED,
        birth_year: 2000,
        ui_feedback: "",
    });
    const currentUser = useSelector((state: RootState) => state.user)
    console.log(currentUser)
    const [formValid, setFormValid] = useState(true)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormVals({ ...formVals, [name]: value });
    };
    const handleSelectChange = (event: SelectChangeEvent) => setFormVals({ ...formVals, employment_status: event.target.value as unknown as EmploymentStatus });

    function formIsValid() {
        return formVals.ui_feedback.length > 0 && formVals.birth_year > 1900 && formVals.birth_year < 2022;
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        if (formIsValid()) {
            setFormValid(true)
            updateUser(currentUser.uid, formVals)
            navigate('/thanks')
        } else {
            setFormValid(false)
        }
    }

    return (
        <Grid container alignItems="center" justifyContent="center" alignContent="center" direction="column" sx={{ p: 1, width: 500 }}>
            <Typography variant="h6"> We would love for your feedback {currentUser.username}</Typography>
            {formValid ? <></> : <Card style={{ backgroundColor: "#FF6961" }} sx={{ p: 1, m: 2 }}>
                <Typography color="white">Your input is invalid, Please make sure you filled out everything</Typography>
            </Card>}
            <form onSubmit={handleSubmit}>
                <Grid item xs={12} container sx={{ m: 1, width: 500 }} spacing={2}>
                    <Grid xs={6} item>
                        <FormControl fullWidth>
                            <InputLabel>Employment Status</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formVals.employment_status as unknown as string}
                                label="Age"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={1}>Employed</MenuItem>
                                <MenuItem value={2}>Unemployed</MenuItem>
                                <MenuItem value={33}>Self-Employed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={6} item>
                        <TextField fullWidth required
                            label="Birth Year"
                            onChange={handleInputChange} type="number"
                            value={formVals.birth_year}
                            inputProps={{ min: 1900, max: 2022 }}
                            name="birth_year" />
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 2, width: 500 }}>
                    <TextField
                        required
                        label="UI Feedback"
                        onChange={handleInputChange} type="text"
                        value={formVals.ui_feedback}
                        multiline rows={5} fullWidth
                        name="ui_feedback" />
                </Grid>
                <Grid item sx={{ p: 1 }}>
                    <Button variant="contained" type='submit'>Submit</Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default Form;

