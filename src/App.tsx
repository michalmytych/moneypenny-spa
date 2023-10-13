import React, { useEffect, useState } from 'react';
import TextInput from './components/atoms/input/TextInput';
import InputMessage from './components/atoms/input/InputMessage';
import InputGroup from './components/atoms/input/InputGroup';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="App p-16 bg-slate-900 h-screen">
      <InputGroup>
        <TextInput
          value={name}
          onChange={setName}
          label='Name'
          placeholder='Write your name'
        />
      </InputGroup>
      <InputGroup>
        <TextInput
          value={name}
          onChange={setName}
          label='Name'
          variant='danger'
          placeholder='Write your name'
        />
        <InputMessage variant='danger'>Error! Something's wrong...</InputMessage>
      </InputGroup>
      <InputGroup>
        <TextInput
          value={name}
          onChange={setName}
          label='Name'
          variant='success'
          placeholder='Write your name'
        />
        <InputMessage variant='success'>YOLO! Everyting's fine.</InputMessage>
      </InputGroup>
      <InputGroup>
        <TextInput
          value={name}
          onChange={setName}
          label='Name'
          variant='warning'
          placeholder='Write your name'
        />
        <InputMessage variant='warning'>Warning! This may broke something.</InputMessage>
      </InputGroup>
    </div>
  );
}

export default App;
