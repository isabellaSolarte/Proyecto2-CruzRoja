import TableCell, { TableCellProps } from '@mui/material/TableCell';

interface CustomTableCellProps  extends TableCellProps  {
  
}

// Un componente átomo que envuelve el TableCell de MUI
const CustomTableCell = ({ children, align = 'right', ...rest }:CustomTableCellProps ) => {
  return (
    <TableCell align={align} {...rest}>
      {children}
    </TableCell>
  );
};

export default CustomTableCell;
