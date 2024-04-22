import { UserPositions } from '../models/UserModels/UserPositions';
export const getUserPositionsList = () => {
  const positions: UserPositions[] = [
    UserPositions.ADMIN,
    UserPositions.BUSINESS,
    UserPositions.BUSINESS_REPRESENTATIVE,
    UserPositions.SUPER_ADMIN,
    UserPositions.VOLUNTEER,
  ];

  return positions;
};
