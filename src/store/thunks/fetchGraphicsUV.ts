import { GraphicUVService } from "../../services/WeatherService"
import { graphicUVSlice } from "../slices/graphicUVSlice"
import { AppDispatch } from "../store"


export const fetchGraphicUV = 
(payload: string) => async (dispatch: AppDispatch) => {
    try{
        dispatch(graphicUVSlice.actions.fetchGraphicUV())
        const res = await GraphicUVService.getGraphicUV(payload)
        if (res.status === 200) {
            dispatch(graphicUVSlice.actions.
                fetchGraphicUVSuccess(res))
        } else {
            dispatch(graphicUVSlice.actions.
                fetchGraphicUVError(res))
        }
    } catch (error) {
        console.log(error)
    }
    
}