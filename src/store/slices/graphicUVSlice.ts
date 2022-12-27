import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Axios, AxiosResponse } from "axios"
import { GraphicUV } from "../types/types"

type graphicUV = {
    graphicUV: GraphicUV,
    isLoading: boolean,
    response: Response
}

type Response = {
    status: number,
    message: string
}

const initialState: graphicUV = {
    graphicUV: {
        wind: {
            speed: 0
        }
    },
    isLoading: false,
    response:{
        status: 0,
        message: ""
    }
}

export const graphicUVSlice = createSlice({
    name: 'graphic_uv',
    initialState,
    reducers:{
        fetchGraphicUV(state){
            state.isLoading = true
        },
        fetchGraphicUVSuccess(
            state, 
            action: PayloadAction<AxiosResponse<GraphicUV>>
            ){
            console.log("Зашел в success")
            state.graphicUV = action.payload.data
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },

        fetchGraphicUVError(
            state, 
            action: PayloadAction<AxiosResponse<GraphicUV>>
            ){
            console.log("Зашел в error")
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
})

export default graphicUVSlice.reducer