import { Role, Sex } from "../../types/Enums";
import { ErrorResponse } from "../ErrorResponse";
import { Address } from "../../types/address";

interface PatientRegisterSucessResponse {
    id: number,
    name: string,
    email: string,
    role: Role,
    birthdate: string,
    sex: Sex,
    address: Address,
    phone_1: string,
    phone_2: string | null,
    cpf: string
}

export interface UserResponse {
    id: number;
    email: string
};

export interface LoginSuccessResponse {
    user: UserResponse;
    token: string;
}

export type PatientRegisterResponse = PatientRegisterSucessResponse | ErrorResponse;
export type LoginResponse = LoginSuccessResponse | ErrorResponse;