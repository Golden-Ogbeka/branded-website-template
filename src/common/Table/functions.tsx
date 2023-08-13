import TableMenu from './TableMenu';
import { menuItemType } from './types';

export const formatTableValue = ({
  value,
  headerName,
  menuItems,
}: {
  value: string;
  headerName: string;
  menuItems?: menuItemType[];
}) => {
  // Boolean Check
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  // Capitalize Check
  if (['email'].includes(headerName)) {
    // should not be capitalized
    return value;
  }

  // Data check
  if (['createdAt'].includes(headerName)) {
    return new Date(value).toDateString();
  }

  // Object check
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return (
      <span className='capitalize'>
        {(value['fullname'] || value['name'] || Object.values(value)[0]) as string}
      </span>
    );
  }

  // Status Check
  if (headerName === 'status') {
    return value === 'open' ? (
      <span className='capitalize text-success'>{value}</span>
    ) : (
      <span className='capitalize text-error'>{value}</span>
    );
  }

  // Menu ID check
  if (headerName === '_id') {
    return <TableMenu id={value} menuItems={menuItems} />;
  }

  return <span className='capitalize'>{value || '-'}</span>;
};
