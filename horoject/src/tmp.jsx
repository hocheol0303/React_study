import React, {useState} from 'react';

const scaleNames={
    c: '섭씨',
    f: '화씨',
};

function TemperatureInput(props){
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) =>{
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={temperature} onChange={handleChange} />
            <p>
                {props.scale == 'c' && ('섭씨 '+temperature+'˚C == 화씨 ' + Math.round((temperature * 9 / 5 + 32)*100)/100 + '˚F')}
                {props.scale == 'f' && ('화씨 '+temperature+'˚F == 섭씨 ' + Math.round(((temperature - 32) * 5 / 9)*100)/100 + '˚C')}
            </p>
        </fieldset>
    );
}

function Calc(props){
    return (
        <div>
            <TemperatureInput scale='c'/>
            <TemperatureInput scale='f'/>
        </div>
    );
}

export default Calc;