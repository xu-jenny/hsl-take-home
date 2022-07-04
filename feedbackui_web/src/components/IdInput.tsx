import React, { ChangeEvent, useState } from "react";
import { TextField, Button, Grid, Card, Typography } from "@mui/material";
import { getUser } from "../utils/api";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import UsersTable from "./UsersTable";

const IdInput: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formVals, setFormVals] = useState({
        uid: '',
    });
    const [error, setError] = useState("")

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormVals({ ...formVals, [name]: value });
    };

    async function handleSubmit(e: any) {
        e.preventDefault()
        if(formVals.uid.length == 10){
            try {
                let user = await getUser(formVals.uid)
                setError("")
                console.log(user)
                dispatch(setUser(user))
                navigate('/form')
            } catch (e: any){
                setError(e.message)
            }
        } else {
            setError("ID must be 10 characters");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justifyContent="center" direction="column" spacing={3}>
                <Typography variant="h6">Please input your 10-digit ID</Typography>
                {error == "" ? <></> : <Card style={{ backgroundColor: "#FF6961" }} sx={{ p: 1, m: 2 }}>
                    <Typography color="white">{error}</Typography>
                </Card>}
                <Grid item xs={12}>
                    <TextField
                        type="number"
                        label="User ID"
                        inputProps={{ maxLength: 10, minLength: 10 }}
                        onChange={handleInputChange}
                        name="uid" />
                </Grid>
                <Grid item sx={{ p: 1 }}>
                    <Button variant="contained" type='submit'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default IdInput;

