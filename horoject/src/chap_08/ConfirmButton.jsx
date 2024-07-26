import React, {useState} from 'react';

//클래스 컴포넌트
/*class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isConfirmed:false,
        };

        // this.handleConfirm= this.handleConfirm.bind(this);
    }

    // 클래스 필드 문법 사용하기
    handleConfirm=() => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    // handleConfirm(){
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    render(){
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}*/

//클래스 컴포넌트를 함수 컴포넌트로 바꾸기
function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed? "확인됨":"확인하기"}
        </button>
    );
}

export default ConfirmButton;