import { Container, Content, Row, Column } from './style';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operation, setOperation] = useState('');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('+');
      handleClear();
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('-');
      handleClear();
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber('0');
    }
  };

  const handleMultiplicationNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('x');
      handleClear();
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setFirstNumber('0');
    }
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${num}${prev === '0' ? '' : prev}`);
  };

  const handleEqual = () => {
    if (firstNumber !== '0' && currentNumber !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case 'x':
          handleMultiplicationNumber();
          break;
        default:
          break;
      }
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="%" onClick={handleMinusNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEqual}/>
          <Button label="x" onClick={handleMultiplicationNumber} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
