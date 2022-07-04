import React from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UsersTable from '../components/UsersTable';

const Thankyou = () => {
    const currentUser = useSelector((state: RootState) => state.user)
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}><h2>Thank you {currentUser.username}! </h2></Grid>
            {currentUser.has_admin_access ?
                <Grid item sx={{ p: 1 }}>
                    <UsersTable />
                </Grid>
            : <></>}
        </Grid>
    )
        
};

export default Thankyou;