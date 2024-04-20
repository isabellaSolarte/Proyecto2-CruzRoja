import { CustomColumn } from '../../components/Molecules/CustomColumn';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircle from '@mui/icons-material/AccountCircle';



const columns1 = (onButtonClick)=>[
  CustomColumn({ field: 'companyName', headerName: 'Empresa', format: 'text', icon: <AccountCircle/>}),
  CustomColumn({ field: 'names', headerName: 'Nombre', format: 'text' }),
  CustomColumn({ field: 'actions', headerName: 'Acciones', format: 'button', sortable: false, buttonDetails: [
    {
      content: 'Editar',
      variant: 'contained',
      color: 'info',
      icon: <EditIcon />,
      onClick: (rowId: number) => onButtonClick('Editar', rowId)
    },
    {
      content: 'Observar',
      variant: 'contained',
      color: 'warning',
      icon: <VisibilityIcon />,
      onClick: (rowId: number) => onButtonClick('Editar', rowId)
    }
  ] }),
CustomColumn({ field: 'switchState', headerName: 'Estado', format: 'switch'}),
];

const rows1 = [
  { "id": 1, "companyName": "Stark Industries", "names": "Tony Stark", "switchState": true },
  { "id": 2, "companyName": "Lannister Holdings", "names": "Tyrion Lannister", "switchState": false },
  { "id": 3, "companyName": "Targaryen Enterprises", "names": "Daenerys Targaryen", "switchState": true },
  { "id": 4, "companyName": "Baratheon Co.", "names": "Robert Baratheon", "switchState": false },
  { "id": 5, "companyName": "Greyjoy Shipping", "names": "Theon Greyjoy", "switchState": false },
  { "id": 6, "companyName": "Tyrell Gardens", "names": "Margaery Tyrell", "switchState": true },
  { "id": 7, "companyName": "Martell Spices", "names": "Oberyn Martell", "switchState": false },
  { "id": 8, "companyName": "Arryn of the Eyrie", "names": "Jon Arryn", "switchState": false },
  { "id": 9, "companyName": "Tully Fisheries", "names": "Catelyn Stark", "switchState": true },
  { "id": 10, "companyName": "Frey Crossings", "names": "Walder Frey", "switchState": true },
  { "id": 11, "companyName": "Bolton Leathers", "names": "Ramsay Bolton", "switchState": false },
  { "id": 12, "companyName": "Stark Industries", "names": "Eddard Stark", "switchState": false },
  { "id": 13, "companyName": "Lannister Holdings", "names": "Jaime Lannister", "switchState": true },
  { "id": 14, "companyName": "Greyjoy Shipping", "names": "Yara Greyjoy", "switchState": true },
  { "id": 15, "companyName": "Tyrell Gardens", "names": "Olenna Tyrell", "switchState": false },
  { "id": 16, "companyName": "Martell Spices", "names": "Doran Martell", "switchState": true },
  { "id": 17, "companyName": "Arryn of the Eyrie", "names": "Robin Arryn", "switchState": true },
  { "id": 18, "companyName": "Tully Fisheries", "names": "Edmure Tully", "switchState": true },
];

export {columns1, rows1};
