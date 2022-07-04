import {  User, UserUpdatePayload } from "./models";


export const getUsers = async () => {
    const url = "http://localhost:8000/users"
    const resp = await fetch(url, {
        method: 'GET',
      });
    const data = await resp?.json();
    return data;
}

export const getUser = async (uid: string) => {
    const url = `http://localhost:8000/users/${uid}`
    const resp = await fetch(url, {
        method: 'GET',
      });
    console.log(resp)
    if(resp.status != 200){
        throw resp.status == 404 ? Error("ID Not Found") : Error("Request is Invalid, Please check back later")
    }
    const data = await resp?.json();
    return data as User;
}

export const updateUser = async (uid: string, data: UserUpdatePayload) => {
    const url = `http://localhost:8000/users/${uid}/update`
    const temp = {
        //@ts-ignore
        employment_status: data.employment_status,
        birth_year: data.birth_year,
        ui_feedback: data.ui_feedback
    }
    console.log(temp)

    try {
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp)
        })
    } catch (e: any) {
        console.log(e)
    }
}