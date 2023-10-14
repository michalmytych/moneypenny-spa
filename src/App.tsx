import React, { useEffect, useState } from 'react';
import TextInput from './components/molecules/input/TextInput';
import InputMessage from './components/molecules/input/InputMessage';
import InputGroup from './components/molecules/input/InputGroup';
import Button from './components/molecules/button/Button';
import Header from './components/atoms/typography/Header';

const App: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="App p-16 bg-slate-900 h-full">
      <Header size={1}>This is Baxton UI Kit</Header>
      <Header size={2}>This is Baxton UI Kit</Header>
      <Header size={3}>This is Baxton UI Kit</Header>
      <Header size={4}>This is Baxton UI Kit</Header>
      <Header size={5}>This is Baxton UI Kit</Header>
      <Header size={1} disabled={true}>This is Baxton UI Kit</Header>
      <Header size={2} disabled={true}>This is Baxton UI Kit</Header>
      <Header size={3} disabled={true}>This is Baxton UI Kit</Header>
      <Header size={4} disabled={true}>This is Baxton UI Kit</Header>
      <Header size={5} disabled={true}>This is Baxton UI Kit</Header>
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
          placeholder='Write your name'
          isLoading={true}
        />
      </InputGroup>
      <InputGroup>
        <TextInput
          value={name}
          onChange={setName}
          label='Name'
          disabled={true}
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
      <InputGroup>
        <Button text='Create' />
      </InputGroup>
      <InputGroup>
        <Button text='Create' disabled={true} />
      </InputGroup>
      <InputGroup>
        <Button text='Create' variant='secondary' />
      </InputGroup>
      <InputGroup>
        <Button text='Create' variant='danger' />
      </InputGroup>
      <InputGroup>
        <Button text='Create' variant='success' />
      </InputGroup>
      <InputGroup>
        <Button text='Create' disabled={true} isLoading={true} loadingText='Creating...'/>
      </InputGroup>
    </div>
  );
}

export default App;
