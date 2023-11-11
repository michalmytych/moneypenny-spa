import React, { useState } from 'react';
import TextInput from '../components/atoms/input/TextInput';
import InputMessage from '../components/atoms/input/InputMessage';
import InputGroup from '../components/atoms/input/InputGroup';
import Button from '../components/molecules/button/Button';
import Header from '../components/atoms/typography/Header';
import NumberInput from '../components/atoms/input/NumberInput';
import DataTable from '../components/organisms/DataTable';

const ComponentsShowcase: React.FC = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(420.00);

    const currencyCode = 'PLN';

    return (
        <div className="App p-8 bg-slate-900 h-full">
            <InputGroup>
                <NumberInput
                    max={1000}
                    min={0}
                    label='Amount'
                    value={amount}
                    onChange={setAmount}
                />
            </InputGroup>

            <InputGroup>
                <NumberInput
                    max={1000}
                    min={-1000}
                    label='Amount'
                    value={amount}
                    onChange={setAmount}
                    unitText='PLN'
                />
            </InputGroup>

            <InputGroup>
                <DataTable
                    data={[
                        {
                            transaction_date: '05.06.2023',
                            category: 'Entertainment',
                            volume: 600.00,
                            description: 'Having fun in Cracow',
                            sender: 'Me, Myself & I',
                        },
                        {
                            transaction_date: '05.06.2023',
                            category: 'Music',
                            volume: 4_600.00,
                            description: 'Fender Stratocaster',
                            sender: 'Definetely me',
                        },
                        {
                            transaction_date: '05.06.2023',
                            category: 'Drinks',
                            volume: 20.00,
                            description: 'Whisky bourbon',
                            sender: "It's not me",
                        },
                        {
                            transaction_date: '05.06.2023',
                            category: 'Entertainment',
                            volume: 750.00,
                            description: 'Bunjee jumping',
                            sender: 'Maybe me',
                        }
                    ]}
                    columns={[
                        { key: 'transaction_date', label: 'TRANSACTION DATE' },
                        { key: 'category', label: 'CATEGORY' },
                        { key: 'volume', label: 'VOLUME', processor: (volume) => <>{volume}<span className='font-semibold text-slate-500'> {currencyCode}</span></> },
                        { key: 'description', label: 'DESCRIPTION' },
                        { key: 'sender', label: 'SENDER' }
                    ]}
                />
            </InputGroup>

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
                <Button text='Create' disabled={true} isLoading={true} loadingText='Creating...' />
            </InputGroup>
        </div>
    );
}

export default ComponentsShowcase;