import React from 'react';

function TableHeader({ tableHeaders }: { tableHeaders: string[] }) {
  return (
    <thead className='font-bold text-[15px] text-white capitalize  bg-primary'>
      <tr className='rounded-full'>
        {tableHeaders.map((header) =>
          header !== '_id' ? (
            <th className='px-3 py-3' scope='col' key={header}>
              {/* Convert camel cased header to words */}
              {header?.replace(/([a-z])([A-Z])/g, '$1 $2')?.toLowerCase()}
            </th>
          ) : (
            <th className='px-3 py-3' scope='col' key={header}></th>
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
