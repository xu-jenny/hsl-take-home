
export enum EmploymentStatus {
    EMPLOYED = 1,
    UNEMPLOYED = 2,
    SELF_EMPLOYED = 3,
}

export interface User {
    uid: string,
    username: string
    has_admin_access: boolean
}

export interface UserPayload {
    uid: string,
    username: string
    hasAdminAccess: boolean
    birth_year: number,
    employment_status: EmploymentStatus,
    ui_feedback: String,
}

export interface UserUpdatePayload {
    birth_year: number,
    employment_status: EmploymentStatus,
    ui_feedback: String,
}