export interface CurrentWeather {
    temp: number;
    text: string;
    code: number;
    photo: number;
    date: string;
};

export interface ForecastWeather {
    minTemp: number;
    maxTemp: number;
    text: string;
    code: number;
    photo: number;
    date: string;
};

export interface Weather {
    currentWeather: CurrentWeather;
    forecastWeather: ForecastWeather[];
}