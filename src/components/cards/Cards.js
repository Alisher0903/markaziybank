import { useState } from "react";

function Cards() {

    const [startIndex, setStartIndex] = useState(0);

    const generateCardsHTML = (startIndex) => {
        const cardElements = [];
        for (let i = startIndex; i < startIndex + 6 && i < 20; i++) {
            cardElements.push(
                <div key={i}>
                    Card {i + 1}
                </div>
            );
        }
        return cardElements;
    };

    const handleNextClick = () => {
        setStartIndex(startIndex + 6);
    };

    const handlePreviousClick = () => {
        setStartIndex(startIndex - 6);
    };

    return (
        
        <div className="App">
            <div id="cardsContainer">
                {generateCardsHTML(startIndex)}
            </div>
            <button id="previousButton" onClick={handlePreviousClick} disabled={startIndex === 0}>
                O'tkazish
            </button>
            <button id="nextButton" onClick={handleNextClick} disabled={startIndex + 6 >= 20}>
                Keyingi 6 ta kartani olish
            </button>
        </div>
    );
}

export default Cards;