import React, { Component, useState } from 'react';

function UseHooks(props) {
const [count,setCount] = useState(0);
    return <button onClick={() => {setCount(count+1)}}>Добавить кол-во{count}</button>;
}

export default UseHooks;