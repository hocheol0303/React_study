import React from 'react';
import Comment from './Comment'

function CommentList(props){
    return(
        <div>
            <Comment name={'이인제'} comment={'My first component'}/>
            <Comment name={'호빵맨'} comment={'밀가루로 만든 호빵맨'}/>
            <Comment name={'컴포넌트란'} comment={'붕어빵틀 하나 만들어놓고 재료만 바꾸면 와다다다다다'}/>
        </div>
    )
}

export default CommentList;