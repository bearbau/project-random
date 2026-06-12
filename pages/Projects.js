export default function Projects() {
     const [calc, setCalc] = useState(""); // function input
      const [result, setResult] = useState(""); // answer output
    
      const ops = ['/','*','+','-','.'];
    
      const updateCalc = value => {
        // input error exceptions (operators)
        if (
          ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
          return; //returns nothing
        }
        setCalc(calc + value);
    
        // if the last value was not an operator
        if (!ops.includes(value)) {
          setResult(eval(calc + value).toString());
        }
      }
    
      // creates buttons for numbers 1-9 in a loop (array)
      const createDigits = () => {
        const digits = [];
    
        for (let i = 1; i < 10; i++){
          digits.push(
            <button 
              onClick={() => updateCalc(i.toString())} 
              key={i}>
              {i}
            </button>
          )
        }
    
        return digits;
      }
    
      // finalizes calculation
      const calculate = () => {
        setCalc(eval(calc).toString());
      }
    
      // deletes last input
      const deleteLast = () => {
        // if input is empty, return
        if (calc === ''){
          return;
        }
    
        // extract part of string 
        // if it is a multi digit number subtract the rightmost digit (hence 0, -1))
        const value = calc.slice(0, -1);
        // start at index 0 and stop right before the last character
        setCalc(value);
      }
        
    
      // markdown stuff
      return (
          <div className="App">
            <div className="calculator">
              <div className="display">
                { result ? <span>({result})</span> : ' '}&nbsp;
                { calc || "0" }
              </div>
    
              <div className="operators">
                <button onClick={() => updateCalc('/')}>/</button>
                <button onClick={() => updateCalc('*')}>*</button>
                <button onClick={() => updateCalc('+')}>+</button>
                <button onClick={() => updateCalc('-')}>-</button>
    
                <button onClick={deleteLast}>DEL</button>
              </div>
    
              <div className="digits">
                { createDigits() }
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
    
                <button onClick={calculate}>=</button>
              </div>
            </div>
          </div>
        );
}