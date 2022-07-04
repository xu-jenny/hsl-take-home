import { Card, Divider, Grid, List, ListItem, ListItemButton, ListItemText, styled, Table, TableCell, TableBody, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import { EmploymentStatus, UserPayload } from "../utils/models";

// const NoAccessGranted: React.FC = () => {
//     return (
//         <Grid container justify = "center">>
//             <Typography>Sorry, You do not have access to this!</Typography>
//         </Grid>
//     )
// }

const UserTable: React.FC = () => {
    // const userState = useSelector((state: RootState) => state.user)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const [users, setUsers] = useState<UserPayload[]>([])

    useEffect(()=>{
        async function fetchUsers() {
            let resp = await getUsers()
            console.log(resp)
            setUsers(resp)
        }
        fetchUsers()
    }, [])

    return (
        <Grid container justifyContent="center">
            <Typography variant="h5">Since you have admin access, you can see all users</Typography>
            <TableContainer component={Card}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User ID</StyledTableCell>
                            <StyledTableCell align="right">Username</StyledTableCell>
                            <StyledTableCell align="right">Birth Year</StyledTableCell>
                            <StyledTableCell align="right">Employment Status</StyledTableCell>
                            <StyledTableCell align="right">Feedback</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.uid}>
                                <StyledTableCell component="th" scope="row">
                                    {user.uid}
                                </StyledTableCell>
                                <StyledTableCell align="right">{user.username}</StyledTableCell>
                                <StyledTableCell align="right">{user.birth_year}</StyledTableCell>
                                <StyledTableCell align="right">{EmploymentStatus[user.employment_status]}</StyledTableCell>
                                <StyledTableCell align="right">{user.ui_feedback}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default UserTable