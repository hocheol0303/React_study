import React, {useState} from 'react';

const scaleNames={
    c: '섭씨',
    f: '화씨',
};

function TemperatureInput(props){
    const [temperature, setTemperature] = useState('0');

    const handleChange = (event) =>{
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <p>따로따로:</p><input value={temperature} onChange={handleChange} />
            <p>
                {props.scale == 'c' && ('섭씨 '+temperature+'˚C == 화씨 ' + Math.round((temperature * 9 / 5 + 32)*100)/100 + '˚F')}
                {props.scale == 'f' && ('화씨 '+temperature+'˚F == 섭씨 ' + Math.round(((temperature - 32) * 5 / 9)*100)/100 + '˚C')}
            </p>
            <p>연동:</p><input value={props.lt} onChange={props.onChange}/>
        </fieldset>
    );
}

function Calc(props){
    const [linkedTemperature, setLinkedTemperature] = useState('');
    const handleLinkedChange = (event)=>{
        setLinkedTemperature(event.target.value);
    }
    return (
        <div>
            <TemperatureInput scale='c' lt={linkedTemperature} onChange={handleLinkedChange}/>
            <TemperatureInput scale='f' lt={linkedTemperature} onChange={handleLinkedChange}/>
        </div>
    );
}

export default Calc;