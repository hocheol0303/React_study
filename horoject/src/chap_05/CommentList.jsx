import React from 'react';
import Comment from './Comment'

const comments =[
    {
        name:'이인제',
        comment:'안녕하세요 소플입니다.',
    },
    {
        name:'호빵맨' ,
        comment:'세균맨 혼내주는 우리 호빵맨' ,
    },
    {
        name:'강강수월래',
        comment:'민속놀이'
    },
];

function CommentList(props){
    return(
        <div>
            <Comment name={'이인제'} comment={'My first component'}/>
            <Comment name={'호빵맨'} comment={'밀가루로 만든 호빵맨'}/>
            <Comment name={'컴포넌트란'} comment={'붕어빵틀 하나 만들어놓고 재료만 바꾸면 와다다다다다'}/>

            {/* 여러개 담아놓고 map함수를 사용하여 모조리 컴포넌트로 출력하자 */}
            {/* "=>"함수는 for each문 느낌? */}
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    )
}

export default CommentList;