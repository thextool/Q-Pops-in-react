import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Brochure from './Components/Brochure'

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
                    <Brochure />
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
