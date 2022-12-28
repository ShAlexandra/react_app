import { AxiosResponse } from 'axios';
import api from '../axios';
import { GraphicUV, Weather, WeatherList } from '../store/types/types';

export class WeatherServiceDay {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}

export class WeatherServiceDays {
  static getDaysWeather(city: string): Promise<AxiosResponse<WeatherList>> {
    return api.get<WeatherList>(`/forecast?q=${city}`);
  }
}

export class GraphicUVService {
  static getGraphicUV(city: string): Promise<AxiosResponse<GraphicUV>> {
    return api.get<GraphicUV>(`/weather?q=${city}`);
  }
}