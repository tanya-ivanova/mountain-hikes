export interface CurrentWeather {
    temp: Number;
    text: String;
    code: Number;
    photo: Number;
    date: String;
};

export interface ForecastWeather {
    minTemp: Number;
    maxTemp: Number;
    text: String;
    code: Number;
    photo: Number;
    date: String;
};