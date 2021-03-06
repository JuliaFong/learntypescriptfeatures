const add = (a: number, b: number): number => {
    return a + b
};

// a and b are both the arguments
// number is the output

const subtract = (a: number, b: number): number => {
    return a - b
}

function divide(a: number, b: number): number {
return a / b
}

const multiply = function(a: number, b: number): number  {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
    return null
    return undefined
}

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
};
logWeather(todaysWeather);

const loggingWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
};
loggingWeather(todaysWeather)

// ES2015 syntax
// const logWeather = ({date, weather}) => {
//     console.log(date)
//     console.log(weather)
// }
//logWeather(todaysWeather)
