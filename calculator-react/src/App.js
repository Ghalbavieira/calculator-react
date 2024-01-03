import { Container, Content, Row, Column } from './style';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  
  const[firstNumber, setFirstNumber] = useState('0');

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
    }
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => '${num}${prev}')
  }

  

  return (
    <Container>
      <Content>
        <input value={currentNumber}/>
          <Row >
            <Button label=" " onClick={() => handleAddNumber('1')}/> 
            <Button label=" " onClick={() => handleAddNumber('1')}/> 
            <Button label=" " onClick={() => handleAddNumber('1')}/> 
            <Button label="C" onClick={handleClear}/> 
          </Row>
          <Row >
            <Button label="+" onClick={handleSumNumber}/> 
            <Button label="-" onClick={() => handleAddNumber('1')}/> 
            <Button label="%" onClick={() => handleAddNumber('1')}/> 
            <Button label="x" onClick={() => handleClear('1')}/> 
          </Row>
          <Row >
            <Button label="1" onClick={() => handleAddNumber('1')}/> 
            <Button label="1" onClick={() => handleAddNumber('1')}/> 
            <Button label="1" onClick={() => handleAddNumber('1')}/> 
            <Button label="9" onClick={() => handleAddNumber('1')}/> 
          </Row>
          <Row >
            <Button label="8" onClick={() => handleAddNumber('1')}/> 
            <Button label="7" onClick={() => handleAddNumber('1')}/> 
            <Button label="6" onClick={() => handleAddNumber('1')}/> 
            <Button label="5" onClick={() => handleAddNumber('1')}/> 
          </Row>
          <Row >
            <Button label="1" onClick={() => handleAddNumber('1')}/> 
            <Button label="2" onClick={() => handleAddNumber('1')}/> 
            <Button label="3" onClick={() => handleAddNumber('1')}/> 
            <Button label="4" onClick={() => handleAddNumber('1')} /> 
          </Row>
      </Content>
    </Container>
  );
}

export default App;
