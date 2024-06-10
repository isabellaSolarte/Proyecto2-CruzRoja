import { UserPositions } from '../models/UserModels/UserPositions';
export const getUserPositionsList = () => {
  const positions: {
    title: UserPositions;
    description: string;
    id: number;
    img: string;
  }[] = [
    {
      title: UserPositions.ADMIN,
      description: 'Administrador',
      id: 1,
      img: '/admin.png',
    },
    {
      title: UserPositions.SUPER_ADMIN,
      description: 'Director',
      id: 2,
      img: '/superAdmin.png',
    },
    {
      title: UserPositions.VOLUNTEER,
      description: 'Otro',
      id: 5,
      img: '/voluntario.png',
    },
  ];

  return positions;
};
