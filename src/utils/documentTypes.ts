/* eslint-disable @typescript-eslint/no-explicit-any */
export const documentTypes = (t: any): { label: string; value: string }[] => [
  {
    label: t('documents.CC'),
    value: 'Cédula de Ciudadanía',
  },
  {
    label: t('documents.TI'),
    value: 'Tarjeta de Identidad',
  },
  {
    label: t('documents.CE'),
    value: 'Cédula de Extranjería',
  },
  {
    label: t('documents.PA'),
    value: 'Pasaporte',
  },
];
