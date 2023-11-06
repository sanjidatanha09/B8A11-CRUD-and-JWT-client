import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTable } from 'react-table'


const ManageFood2 = () => {
    const managefood = useLoaderData()
    console.log(managefood)

    const data = React.useMemo(() => managefood, []);
    const columns = React.useMemo(() => [
        // {
        //     Header: "ID",
        //     accessor: "_id",
        // },
        {
            Header: "Donator Name",
            accessor: "donatorname",
        },
        {
            Header: "Food Name",
            accessor: "foodname",
        },
        {
            Header: "Quantity",
            accessor: "foodquantity",
        },
        {
            Header: "Update",
            accessor: "",
        },
        {
            Header: "Delete",
            accessor: "",
        },
        {
            Header: "Manage Food",
            accessor: "",
        }
    ], []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });






    return (
        <div>

            <div className='mt-10 lg:w-[1000px] mx-auto border'>
                <table className='text-center text-2xl text-gray-500' {...getTableProps()}>
                    <thead className=''>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className='p-5' {...column.getHeaderProps()}>
                                        {column.render("Header")}

                                    </th>
                                ))}

                            </tr>

                        ))}

                    </thead>

                    <tbody className='text-bold text-gray-500' {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>

                                    ))}

                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFood2;