import React from 'react';

type DataTableColumnAbstract = {
    key: string,
    label: string
};

interface DataTableProps {
    data: Array<Record<string, any>>;
    columns: Array<DataTableColumnAbstract>;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
    return (
        <div className="border border-transparent rounded-xl overflow-hidden ">
            <table className='w-full'>
                <thead className='bg-slate-800'>
                    <tr className='border-b border-slate-600'>
                        {columns.map((column: DataTableColumnAbstract, index: number) => (
                            <th scope="col" className='text-slate-400 text-sm px-6 py-3 capitalize' key={index}>{column.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='rounded-b-xl'>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`bg-slate-950 ${rowIndex < data.length - 1 ? 'border-b border-slate-700' : null}`}>
                            {columns.map((column: DataTableColumnAbstract, columnIndex: number) => {
                                return columnIndex === 0
                                    ? <th scope="col" className='px-6 py-4 text-slate-50' key={columnIndex}>{row[column.key]}</th>
                                    : <td className='px-6 py-4 text-slate-50' key={columnIndex}>{row[column.key]}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;