import apiClient from "@/lib/networking/apiHandler"
import { LoginDto } from "../types/Login.types"
import { handleErr, handleResponse } from "@/lib/networking/responseHandler"

export const loginAsAdmin = async (data: LoginDto) => {
try{
        const res = await apiClient.post("/auth/login", data)
    return handleResponse(res)
}
catch(error){
    return handleErr(error,"Error logging in as admin")
}
}