// 사용자로부터 입력을 받는 컴포넌트

import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);

    // 파라미터 중 height 있으면 그거로 height 설정
    ${(props) => props.height && `height: ${props.height}px;`};
    
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){
    const {height, value, onChange} = props;

    return (
        <StyledTextarea height={height} value={value} onChange={onChange} />
    );
}

export default TextInput;