// 작성한 내용을 저장하기위한 버튼

import React from 'react';
import styled from 'styled-components';

// StyledButton 태그는 이러한 CSS를 적용시키면서 소환할거예요
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    // 버튼의 이름과 클릭시 수행할 동작을 props로 받는다.
    const {title, onClick} = props;

    return(

        <StyledButton onClick={onClick}>
            {/* 이름을 정하지 않으면 button이라고만 쓰겠다. */}
            {title || "button"}
        </StyledButton>
    );
}

export default Button;