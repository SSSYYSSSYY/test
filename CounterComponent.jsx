const { useState } = require("react");

function CounterComponent(){
    const [num, setNum] = useState(0);//數字初始值為0

    const plus = () => {
        setNum(num + 1);
    }

    const minus = () => {
        setNum(num - 1);
    }

    return (<div>
        <p>number: {num}</p>
        <button onClick={plus}
        type="button">plus</button>
        <button onClick={minus}
        type="button">minus</button>
    </div>)
}