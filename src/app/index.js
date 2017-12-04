import React from "react";
import { render } from "react-dom";

const quotesJson = [
    {'quote' : "Where there is a will there is a way!",
        "by": "- Swami Vivekananda"},
    {'quote' : "Arise, Awake and stop not until the goal is reached!",
        "by": "- Swami Vivekananda"},
    {'quote' : "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world.",
        "by": "- Swami Vivekananda"},
    {'quote' : "All the power is within you, you can do anything and everything. belive in that; don't belive that you are week, stand up and express the divinity within you.",
        "by": "- Swami Vivekananda"},
    {'quote' : "In a conflict between the heart and the brain, follow your heart.",
        "by": "- Swami Vivekananda"},
    {'quote' : "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
        "by": "- John Keats"},
    {'quote' : "When you reach the end of your rope, tie a knot in it and hang on.",
        "by": "- Franklin D. Roosevelt"},
    {'quote' : "But man is not made for defeat. A man can be destroyed but not defeated.",
        "by": "- Ernest Hemingway"},
    {'quote' : "There is nothing permanent except change.",
        "by": "- Heraclitus"},
    {'quote' : "It is far better to be alone, than to be in bad company.",
        "by": "- George Washington"},
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // quote: "",
            // quotedBy: ""
            // randomNumBtwn0and99: ""
        }
    }

    generateQuote() {
        let randomNumBtwn0and99 = Math.floor(Math.random() * 10);
        let quote = quotesJson[randomNumBtwn0and99].quote;
        let quotedBy = quotesJson[randomNumBtwn0and99].by;

        return (<div>
                    <h3>{quote}</h3>
                    <h5>{quotedBy}</h5>
                </div>);
    }

    onClick() {
        this.randomNumBtwn0and99 = Math.floor(Math.random() * 10);
        this.quote = quotesJson[this.randomNumBtwn0and99].quote;
        this.quotedBy = quotesJson[this.randomNumBtwn0and99].by;

        this.setState({
            quote: this.state.quote,
            quotedBy: this.state.quotedBy
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <div>{this.generateQuote()}</div>
                        <hr/>
                        <button className="btn btn-primary" onClick={this.onClick.bind(this)}>New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));