import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import styled from 'styled-components';
import CustomButton from './../../Atoms/Button/Button';
import LabelGroup from './../../Molecules/CustomLabelGroup/CustomLabelGroup';
import CustomText from './../../Atoms/CustomText/CustomText';

interface IAlertProps {
  isOpen: boolean;
  title: string;
  content: string;
  iconUrl: string;
  onClose: () => void;
  onContinue: () => void;
  onCancel: () => void;
  color: string;
  backgroundColor: string;
}

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 8px;
    border: 1px solid ${(props: IAlertProps) => props.color};
  }
`;

const Header = styled(DialogTitle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: ${(props: IAlertProps) => props.color};
  font-weight: 600;
  font-size: 16px;
`;

const Content = styled(DialogContent)`
  padding: 20px;
  color: #333;
`;

const Actions = styled(DialogActions)`
  padding: 16px 20px;
  display: flex;
  justify-content: flex-end;
`;

export const AlertDialog: React.FC<IAlertProps> = ({
  isOpen,
  title,
  content,
  iconUrl,
  onClose,
  onContinue,
  onCancel,
  color,
  backgroundColor,
}) => {
  return (
    <StyledDialog open={isOpen} onClose={onClose} color={color}>
      <Header>
        <Icon url={iconUrl} /> {/* Assuming an `url` prop for Icon */}
        <Text>{title}</Text>
        <Button onClick={onClose}>X</Button> {/* Assuming `onClick` prop for Button */}
      </Header>
      <Content>{content}</Content>
      <Actions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onContinue} backgroundColor={color} textColor="#FFF">
          Continue
        </Button>
      </Actions>
    </StyledDialog>
  );
};
