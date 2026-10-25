import { useState } from 'react'

function Calculator() {

    //controlled input state, strings initially
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('+');

    //result shown
    const [result, setResult] = useState('');

    //calculate on submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //convert input strings to numbers
        const a = Number(num1);
        const b = Number(num2);
        let answer;

        if (operator === '+') answer = a + b;
        else if (operator === '-') answer = a - b;
        else if (operator === '*') answer = a * b;
        else if (operator === '/') {
            if (b === 0) {
                setResult('Cannot divide by zero');
                return;
            }
            answer = a / b;
        }

        setResult(`${a} ${operator} ${b} = ${answer}`);
    }

    return (
        <div className="Calculator componentBox">
            <form onSubmit={handleSubmit}>
                <input type="number" name="num1" value={num1} required
                    onChange={(e) => setNum1(e.target.value)} />

                <select name="operator" value={operator}
                    onChange={(e) => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </select>

                <input type="number" name="num2" value={num2} required
                    onChange={(e) => setNum2(e.target.value)} />

                <button>Calculate</button>
            </form>
            <h3>{result}</h3>
        </div>
    )
}

export default Calculator;