import { CustomColumn } from '../../components/Molecules/CustomColumn';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const columns1 = [
  CustomColumn({ field: 'companyName', headerName: 'Empresa', width: 250, format: 'text', variante: 'texto', content: '', buttonDetails: [] }),
  CustomColumn({ field: 'names', headerName: 'Nombre', width: 250, format: 'text', variante: 'texto', content: '', buttonDetails: []  }),
  CustomColumn({ field: 'actions', headerName: 'Acciones', width:250, format: 'button', variante: 'texto', content: '', buttonDetails: [
    {
      content: 'Editar',
      variant: 'contained',
      color: 'primary',
      icon: <EditIcon />
    },
    {
      content: 'Observar',
      variant: 'contained',
      color: 'warning',
      icon: <VisibilityIcon />
    }
  ] }),
CustomColumn({ field: 'state', headerName: 'Estado', format: 'switch', variante: 'texto', content: '', buttonDetails: [] }),
];

export {columns1};
