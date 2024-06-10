import RecyclingIcon from '@mui/icons-material/Recycling';
import { CustomColumn } from '../../../components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const columns = (t, observeAction, deleteAction) => {
  return [
    CustomColumn({
      icon: <RecyclingIcon color="success" />,
      width: 200,
      field: 'name',
      headerName: t('generalTableHeaders.actions'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'footPrintUnity',
      headerName: t('generalTableHeaders.ufp'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'quantity',
      headerName: t('generalTableHeaders.quantity'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 100,
      field: 'unitaryPrice',
      headerName: t('generalTableHeaders.cost'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 300,
      field: 'options',
      headerName: t('generalTableHeaders.options'),
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <EditIcon />,
          onClick: (rowData: { id: string }) => {
            observeAction(rowData.id);
          },
        },
        {
          content: t('generalButtonText.delete'),
          variant: 'contained',
          color: 'error',
          icon: <DeleteForeverIcon />,
          onClick: (rowData: { id: string }) => {
            deleteAction(rowData.id);
          },
        },
      ],
    }),
  ];
};

export default columns;
