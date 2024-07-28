import React, { useState } from 'react';

// function BoilingVerdict(props){
//     if(props.celsius>=100){
//         return <p>물이 끓는다.</p>;
//     }
//     else{
//         return <p>물이 안끓는다.</p>;
//     }
// }

// function getInput(props){

//     const handleSubmit = (event) =>{
//         return <BoilingVerdict celsius={event}/>
//     }
// }


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓는다.</p>;
    }
    else return <p>물이 안끓는다.</p>;
}

function ToFahrenheit(props) {
    const fahrenheit = props.celsius * 9 / 5 + 32;
    return <p>{props.celsius}˚C = {Math.round(fahrenheit * 100) / 100}˚F</p>;
}

function ToCelsius(props){
    const celsius = (props.fahrenheit-32)*5/9;
    return <p>{props.fahrenheit}˚F = {Math.round(celsius*100)/100}˚C</p>;
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('0');
    const [celsius, setCelsius] = useState('0');
    const [fahrenheit, setFahrenheit] = useState('0');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    const celsiusChange = (event) =>{
        setCelsius(event.target.value);
    }

    const fahrenheitChange = (event)=>{
        setFahrenheit(event.target.value);
    }

    const plus = ()=>{
        setCelsius(Number(celsius)+1);
    }

    const minus = ()=>{
        setCelsius(Number(celsius)-1);
    }

    return (
        <div>
            <fieldset id='cToF'>
                <legend>섭씨 온도를 입력하세요:</legend>
                <input value={celsius} onChange={celsiusChange} />
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <BoilingVerdict celsius={celsius} />
                <ToFahrenheit celsius={celsius} />
                {/* hover로 색깔 놀이 */}
                {/* <span style={{padding: '10px 20px 30px 40px', backgroundColor:'red'}}>hi</span> */}
            </fieldset>
            <fieldset>
                <legend>화씨 온도를 입력하세요:</legend>
                <input value={fahrenheit} onChange={fahrenheitChange} />
                <BoilingVerdict fahrenheit={fahrenheit}/>
                <ToCelsius fahrenheit={fahrenheit}/>
            </fieldset>
            <p>부모로부터 Fahrenheit to Celsius인지 Celsius to Fahrenheit인지를 받아서 plus/minus 컴포넌트를 하나만 사용하여 따로 놀게 하고싶다.</p>
        </div>
    )
}

export default Calculator;