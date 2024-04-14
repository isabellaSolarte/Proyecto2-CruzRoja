import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import { CustomTableCell } from '../../Atoms/TableCell';

interface TableRowDataProps {
  row: (string | number)[];
}

const CustomTableRow: React.FC<TableRowDataProps> = ({ row }) => {
  return (
    <TableRow>
      {row.map((content, index) => (
        <CustomTableCell key={index} align={index === 0 ? 'left' : 'right'}>
          {content}
        </CustomTableCell>
      ))}
    </TableRow>
  );
};

export default CustomTableRow;
