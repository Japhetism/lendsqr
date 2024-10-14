import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import "./table.scss";

type RowData = {
  [key: string]: any;
};

type DataTableProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  initialPageSize: number;
  showPagination: boolean;
};

const DataTable = <T extends RowData>({ data, columns, initialPageSize, showPagination }: DataTableProps<T>) => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(initialPageSize);

    const totalItems = data.length;
    const pageCount = Math.ceil(totalItems / pageSize);

    const table = useReactTable({
        data: data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize),
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        pageCount,
    });

    const getPaginationRange = () => {
        const range: (number | string)[] = [];
        
        range.push('<');

        range.push(1);

        if (pageCount > 3) {
        if (pageIndex > 1) {
            range.push(2);
        }
        
        if (pageIndex > 2 && pageIndex < pageCount - 1) {
            range.push('...');
        }

        if (pageIndex > 0 && pageIndex < pageCount - 1) {
            range.push(pageIndex + 1);
        }

        if (pageIndex < pageCount - 3) {
            range.push('...');
        }

        range.push(pageCount);
        }

        range.push('>');

        return range;
    };

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number') {
        setPageIndex(page - 1);
        } else if (page === '<') {
        setPageIndex(prev => Math.max(prev - 1, 0));
        } else if (page === '>') {
        setPageIndex(prev => Math.min(prev + 1, pageCount - 1));
        }
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(event.target.value));
        setPageIndex(0);
    };

    return (
        <div className="p-2">
            <table className='table'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {showPagination && (
                <div className="pagination">
                    <div className="info">
                        <span>Showing</span>
                        <select value={pageSize} onChange={handlePageSizeChange}>
                            {[5, 10, 20, 50].map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                        <span>out of {totalItems}</span>
                    </div>
                    <div className="page-controls">
                        {getPaginationRange().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(page)}
                                disabled={page === '<' ? pageIndex === 0 : page === '>' ? pageIndex >= pageCount - 1 : false}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default DataTable;
