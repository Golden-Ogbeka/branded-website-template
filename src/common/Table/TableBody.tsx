import React from 'react';
import { formatTableValue } from './functions';
import { menuItemType, rowType } from './types';

function TableBody({
  data,
  tableHeaders,
  menuItems,
}: {
  data: any[];
  tableHeaders: string[];
  menuItems?: menuItemType[];
}) {
  const tableRows: rowType = React.useMemo(
    () =>
      data?.map((data: any) => ({
        row: tableHeaders.map((header) => ({
          value: data[header],
          headerName: header,
        })),
      })),
    [data, tableHeaders]
  );

  return (
    <tbody className='[&>*:last-child]:border-none border'>
      {tableRows.map(({ row }, index) => (
        <tr key={index} className='border-b hover:bg-[#F4F5F6] duration-300'>
          {row.map((item, index) => (
            <td className='px-3 py-3' key={index}>
              {formatTableValue({
                value: item.value,
                headerName: item.headerName,
                menuItems,
              })}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
