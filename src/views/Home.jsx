import React from 'react'
import Time from '../components/Time'
import News from '../components/News'

function Home() {
    return (
        <div>
            <main>
                <section>
                    <Time></Time>
                </section>
                <section>
                    <News></News>
                </section>
            </main>
        </div>
    )
}

export default Home