import React from 'react';

const students=[
    {   id:1,
        name:'Inje',
    },
    {   id:2,
        name:'Steve',
    },
    {   id:3,
        name:'Bill',
    },
    {   id:4,
        name:'Jeff',
    },
];

function AttendanceBook(props){
    return (
        // 인덱스를 키값으로 사용
        <ul>
            {students.map((student, index) => {return <li key={index.toString()}>{student.name}</li>})}
        {/* 미리 부여한 id를 키값으로 사용 */}
            {students.map((student) => {return <li key={student.id}>{student.name}</li>})}
        </ul>
    );
}

export default AttendanceBook;