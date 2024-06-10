
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import dayjs from 'dayjs';

type View = 'day' | 'month' | 'year';

interface DatePickerProps {
  views: View[]; // Lista de vistas disponibles
  label: string; // Propiedad para la etiqueta
  defaultValue: dayjs.Dayjs; // Valor por defecto de tipo Dayjs
  onChange: (date: dayjs.Dayjs | null) => void; // Función para manejar el cambio de la fecha
}

const CustomDatePicker = ({ views, label, defaultValue, onChange }: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <Typography variant="body1">{label}</Typography> 
      <DatePicker
        views={views}
        defaultValue={defaultValue} // Usa el valor predeterminado proporcionado
        disablePast={true}
        disableFuture={false}
        displayWeekNumber={true}
        autoFocus={true}
        onAccept={(date) => onChange(date)} // Maneja el cambio de la fecha
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
