import axios from "axios"
import NewsClass from "../class/News_class"
import TimeClass from "../class/Time_class"

export const news_api = async () => {
    const data = await axios.get('https://newsapi.org/v2/everything?q=time&sortBy=popularity&pageSize=20&language=es&apiKey=838771a1a8dc45bfbb9d16db385a9768')
        .then(
            response => {
                const data = response.data
                data.articles.map((item) => {
                    const registroNews = new NewsClass(
                        item.url,
                        item.author,
                        item.title,
                        item.description
                    )
                    registroNews.registerNews()
                })
                return data.articles
            }
        ).catch(
            err => { console.log(err); }
        )
    return data
}

// https://api.openweathermap.org/data/2.5/weather?q=cali&appid=f3777d0814550cb82fadc5964ae26fc7
export const time_api = async () => {
    const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=cali&appid=f3777d0814550cb82fadc5964ae26fc7&&units=metric')
        .then(
            response => {
                const data = response.data
                console.log(data)
                const registroTime = new TimeClass(
                    'https://api.openweathermap.org/data/2.5/weather?q=cali&appid=f3777d0814550cb82fadc5964ae26fc7&&units=metric',
                    data.main.humidity,
                    data.main.temp
                )
                registroTime.registerTime()
                return data
            }
        ).catch(
            err => { console.log(err); }
        )
    return data
}

export default { news_api, time_api };
