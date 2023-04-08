import React, { useState } from 'react';
import '../assets/css/MoneyButton.css';
import moneyBag from '../assets/images/money-bag.png';

const MoneyButtonGame = () => {

    const formatDate = (date) => {
        const dateOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        return `${formattedDate} ${formattedTime}`;
    };

    // State variables
    const [moneyCount, setMoneyCount] = useState(500);
    const [chances, setChances] = useState(10);
    const [gameHistory, setGameHistory] = useState([
        {
            date: formatDate(new Date()),
            message:
                "Welcome to Money Button Game, risk taker! All you need to do is to push buttons to try your luck. You have free 10 chances with initial money ₱500. Choose wisely and good luck!",
        },
    ]);


    // Other variables
    const riskRanges = {
        Low: [-25, 100],
        Moderate: [-100, 1000],
        High: [-500, 2500],
        Severe: [-3000, 5000],
    };

    // Event handlers
    const resetGame = () => {
        setMoneyCount(500);
        setChances(10);
        setGameHistory([
            {
                date: formatDate(new Date()),
                message:
                    "Welcome to Money Button Game, risk taker! All you need to do is to push buttons to try your luck. You have free 10 chances with initial money ₱500. Choose wisely and good luck!",
            },
        ]);
    };

    const takeRisk = (change, risk) => {
        const newMoneyCount = moneyCount + change;
        const newChances = chances - 1;
        const color = change >= 0 ? "green" : "red";
        const newGameHistory = [
            ...gameHistory,
            {
                date: formatDate(new Date()),
                risk: risk,
                change: change,
                moneyCount: newMoneyCount,
                chances: newChances,
                color: color,
            },
        ];

        if (newChances === 0) {
            newGameHistory.push({
                date: formatDate(new Date()),
                message: `GAME OVER! No more chances left. Your final money count is ₱${newMoneyCount}.`,
            });
        }

        setMoneyCount(newMoneyCount);
        setChances(newChances);
        setGameHistory(newGameHistory);
    };


    const onRiskClick = (risk) => {
        if (chances > 0) {
            const [min, max] = riskRanges[risk];
            const change = Math.floor(Math.random() * (max - min + 1)) + min;
            takeRisk(change, risk);
        }
    };


    return (
        <div className="wrapper">
            <header>
                <section>
                    <p className="money-chance">
                        Your Money:{" "}
                        <span className="current-money-bg">
          <span className="current-money">₱{moneyCount}</span>
        </span>
                    </p>
                    <p className="money-chance">
                        Chances Left: <span className="chances">{chances}</span>
                    </p>
                </section>
                <section>
                    <h1 className="game">Money Button Game</h1>
                    <button className="reset-btn" onClick={resetGame}>
                        Reset Game
                    </button>
                </section>
            </header>
            <div className="game-wrapper">
                <section className="game-box low">
                    <h2>Low Risk</h2>
                    <img className="money-bag" src={moneyBag} alt="money bag" />
                    <button
                        className="bet-btn big-btn"
                        onClick={() => onRiskClick("Low")}
                        disabled={chances === 0}
                    >
                        Bet
                    </button>
                    <p>By -25 up to 100</p>
                </section>
                <section className="game-box medium">
                    <h2>Medium Risk</h2>
                    <img className="money-bag" src={moneyBag} alt="money bag" />
                    <button
                        className="bet-btn big-btn"
                        onClick={() => onRiskClick("Moderate")}
                        disabled={chances === 0}
                    >
                        Bet
                    </button>
                    <p>By -100 up to 1000</p>
                </section>
                <section className="game-box high">
                    <h2>High Risk</h2>
                    <img className="money-bag" src={moneyBag} alt="money bag" />
                    <button
                        className="bet-btn big-btn"
                        onClick={() => onRiskClick("High")}
                        disabled={chances === 0}
                    >
                        Bet
                    </button>
                    <p>By -500 up to 2500</p>
                </section>
                <section className="game-box severe">
                    <h2>Severe Risk</h2>
                    <img className="money-bag" src={moneyBag} alt="money bag" />
                    <button
                        className="bet-btn big-btn"
                        onClick={() => onRiskClick("Severe")}
                        disabled={chances === 0}
                    >
                        Bet
                    </button>
                    <p>By -3000 up to 5000</p>
                </section>
            </div>
            <h2 className="money-chance">Game Host</h2>
            <div className="game-history-board">
                {gameHistory.map((item, index) => (
                    <p
                        key={index}
                        style={{ color: item.color ? item.color : "inherit" }}
                    >
                        {item.message
                            ? `[${item.date}] ${item.message}`
                            : `[${item.date}] You pushed "${item.risk} Risk". Value is ${item.change}, Your current money now is ₱${item.moneyCount} with ${item.chances} chance(s) left.`}
                    </p>
                ))}
            </div>

        </div>

    );
};

export default MoneyButtonGame;