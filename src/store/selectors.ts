import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) => state.currentWeatherSliceReduser

export const selectDaysWeatherData = (state: RootState) => state.daysWeatherSliceReduser

export const selectGraphicUVData = (state: RootState) => state.graphicUVSliceReduser