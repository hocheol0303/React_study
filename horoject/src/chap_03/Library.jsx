import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            {/* Book 함수에 속성을 지명해서 파라미터를 넘겨주는 느낌이다 */}
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;