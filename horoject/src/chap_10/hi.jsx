import React from 'react';

const numbers=[1,2,3,4,5, 1];

const listItems= numbers.map((number) => <li key={number.toString()}>{number}</li>)

export default listItems;