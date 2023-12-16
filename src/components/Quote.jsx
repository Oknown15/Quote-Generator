import React, { useState } from 'react';

function Quote() {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
        const delay = 1000;
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() *quotes.length)];
        setQuote(select);
    }

    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal",
        author : "Johann Wolfgang von Goethe",
    });

    loadQuotes();
    return (
        <div className='container'>
            <h1>quote generator</h1>
            <div className="quote">{quote.text}</div>
            <div className="author">{quote.author.split(',')[0]}</div>
            <div className="hr"></div>
            <button className='btn-change' onClick={() => {random()}}>change</button>
        </div>
    );
}

export default Quote;