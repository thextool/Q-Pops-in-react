import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'

class App extends Component {

    // state = {quotes: []}

    // componentDidMount() {
    //   fetch(const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    // }


    render() {
        return (
            <body>
                <Header />
                <main>
                    <section>
                        <h2 className="welcome">Welcome to Q-Pops! A Matt Riach creation! Play awhile!</h2>
                        <h4 className="lead intro">In social situation when someone quotes a tv show 
                            and you feel like an idiot because you don’t know
                            where it comes from or other funny and cool
                            quotes to respond with. Studies have shown the 
                            2 most quoted shows in all social situations 
                            are Ron Swanson from Parks and Recreation and 
                            Breaking Bad. Now your knowledge and learn some 
                            new quotes. So the next time you are in a social 
                            situation you will have to knowledge to be the 
                            coolest kid on the block!
                        </h4>
                    </section>
                    <section className="quoteAndButton">
                        <button type="button" className="btn btn-primary btn-lg newQuote">New Quote</button>
                        <h3>Guess the Quote:</h3>
                        <h3 id="randomQuote" className="quote"></h3>
                    </section>
                    <section>
                        <div className="answerTitles">
                            <h3 className="guesses">Breaking Bad</h3>
                            <h3 className="guesses">Ron Swanson</h3>
                        </div>
                        <div className="answerSection">
                            <img id="breakingGuess" src="./images/Breaking-Bad.png" alt="breakingBad"></img>
                            <h3>or</h3>
                            <img id="ronGuess" src="./images/Ron.jpg" alt="ronSwanson"></img>
                        </div>
                    </section>
                    <section>
                        <h2 id="answer"></h2>
                    </section>
                    <section>
                        <ul className="answerList">
                        </ul>
                        <h3 id="scoreText">Answer 5 questions go get a score!</h3>
                    </section>
                </main>
            </body>
        )
    }
}

export default App;
