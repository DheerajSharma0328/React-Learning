import { useState } from "react"
import "./Lottery.css"

export default function Lottery() {

    let [number, setNumber] = useState(0)
    let [total, setTotal] = useState(0)
    let [win, setWin] = useState("Test Your Luck")

    const split = (num) => {


        console.log(num, typeof num);

        const arrayString = num.split('')
        const arrayNumber = arrayString.map(Number)
        const arraySum = arrayNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        console.log(arraySum);
        return arraySum

    }

    const generateNumber = () => {

        let mini = 100
        let max = 999

        mini = Math.ceil(mini); // Ensure mini is an integer
        max = Math.floor(max);
        const number = Math.floor(Math.random() * (max - mini + 1)) + mini
        const sum = split(String(number))
        
        setNumber(number)
        setTotal(sum)
        result(sum)

    }

    const result = (sum)=>{

        if(sum == 15){
            setWin("You Win!!!")   
        }
        else{
            setWin("Bad Luck Try Again!!!")
        }

    }


    return (

        <div className="main">
            <button onClick={generateNumber} className="genbutn">Generate New Ticket</button>
            <h3 className="num">Your Number is: {number} And Sum is: {total}</h3>
            <h3 className="result">{win}</h3>
        </div>

    )

}
