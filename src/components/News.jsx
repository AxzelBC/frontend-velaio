import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { news_api } from '../utils/api-rest'
import New from './New'

function News() {

    const [myNews, setMyNews] = useState([])

    const dataNews = async () => {
        await news_api().then(
            response => { setMyNews(response); }
        )
    }

    useEffect(() => {
        dataNews()
    }, [])

    return (
        <Container sx={{ display: 'flex' }} className='row mt-4'>
            {
                myNews.map((item) => (
                    <div className='col-4 mb-3'>
                        <New
                            key={item.author}
                            titulo={item.title}
                            autor={item.author}
                            image={item.urlToImage}
                            description={item.description}
                        />
                    </div>
                ))
            }
        </Container>
    )
}

export default News