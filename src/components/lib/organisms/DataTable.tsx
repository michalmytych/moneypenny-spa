import React, { ReactNode } from 'react';

type ColumnProcessorValue = null | number | string | ReactNode;

type ColumnProcessor = (input: ColumnProcessorValue) => ColumnProcessorValue;

type DataTableColumnAbstract = {
    key: string,
    label: string,
    processor?: ColumnProcessor,
};

interface DataTableProps {
    data: Array<Record<string, any>>;
    columns: Array<DataTableColumnAbstract>;
    sortable?: boolean,
}

const DataTable: React.FC<DataTableProps> = ({ 
    data = [], 
    columns,
    sortable = false, // @t
}) => {
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
                                let cellValue = row[column.key];
                                cellValue = column.processor ? column.processor(cellValue) : cellValue;
                                
                                return columnIndex === 0
                                    ? <th scope="col" className='px-6 py-4 text-slate-50' key={columnIndex}>{cellValue}</th>
                                    : <td className='px-6 py-4 text-slate-50' key={columnIndex}>{cellValue}</td>
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;