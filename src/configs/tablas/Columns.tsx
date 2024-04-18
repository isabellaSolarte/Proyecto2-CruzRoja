import { CustomColumn } from '../../components/Molecules/CustomColumn';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns1 = [
  CustomColumn({ field: 'companyName', headerName: 'Empresa', format: 'text', variante: 'texto', content: '', buttonDetails: [] }),
  CustomColumn({ field: 'names', headerName: 'Nombre', format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
  CustomColumn({ field: 'actions', headerName: 'Acciones', format: 'button', variante: 'texto', content: '', sortable: false, buttonDetails: [
    {
      content: 'Editar',
      variant: 'contained',
      color: 'info',
      icon: <EditIcon />
    },
    {
      content: 'Observar',
      variant: 'contained',
      color: 'warning',
      icon: <VisibilityIcon />
    }
  ] }),
CustomColumn({ field: 'switchState', headerName: 'Estado', format: 'switch', variante: 'texto', content: '', buttonDetails: [] }),
];

export {columns1};
