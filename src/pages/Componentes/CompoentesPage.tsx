import { Container } from '@mui/material';
import CustomButton from '../../components/Atoms/CustomButton/CustomButton';
import { AccountCircle, Settings } from '@mui/icons-material';
import {
  CustomInput,
  CustomLabelGroup,
  CustomSwitch,
  CustomText,
  EmptyBox,
  Search,
  SearchBar,
} from '../../components';
import { useState } from 'react';
import TabsAtomComponent from '../../components/Atoms/CustomTabs/TabsAtomComponent';
import { useUserActions } from '../../recoil';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';

const CompoentesPage = () => {
  const [switchState, setSwitchState] = useState(false);
  const handleSwitchState = () => {
    setSwitchState(!switchState);
  };

  const [disableInput, setDisableInput] = useState(false);

  const handleInput = () => {
    setDisableInput(!disableInput);
  };

  const user = useUserActions().getLoggedUser();
  const navigate = useNavigate();

  //const [step, setStep] = useState(0);

  return (
    <Container>
      {JSON.stringify(user)}
      <CustomButton
        content="NAVEGAR A LOGIN"
        onClick={() => {
          navigate(PathNames.LOGIN, { replace: true });
        }}
      />
      <Container sx={{ display: 'flex', gap: 2 }}>
        <CustomButton content="boton" onClick={handleInput} variant="contained" color="success" />
        <CustomInput
          placeholder="Small Input"
          size="small"
          updateText={() => {}}
          value="pepito perez"
          props={{ disabled: disableInput }}
        />
      </Container>

      <CustomText texto="Atomo CustomButton" variante="subtitulo" />
      <Container sx={{ display: 'flex', gap: 2 }}>
        <CustomButton content="boton" onClick={() => {}} variant="contained" color="success" />
        <CustomButton
          content="boton"
          onClick={() => {}}
          variant="contained"
          color="warning"
          icon={<AccountCircle />}
        />
        <CustomButton
          content="boton"
          onClick={() => {}}
          variant="contained"
          color="info"
          icon={<AccountCircle />}
          buttonSide="end"
        />
        <CustomButton
          content="boton"
          onClick={() => {}}
          variant="contained"
          color="error"
          icon={<AccountCircle />}
          buttonSide="end"
        />
        <CustomButton
          content="boton"
          onClick={() => {}}
          variant="contained"
          color="secondary"
          icon={<AccountCircle />}
          buttonSide="end"
        />
        <CustomButton
          content="boton"
          onClick={() => {}}
          variant="contained"
          color="inherit"
          icon={<AccountCircle />}
          buttonSide="end"
        />
      </Container>

      <CustomText texto="Atomo CustomSelect" variante="subtitulo" />
      <Container sx={{ display: 'flex', gap: 2 }}>
        {/* <CustomSelect
          label="Seleccionar elemento"
          options={[
            { label: 'carro', value: 1 },
            { label: 'moto', value: 2 },
          ]}
        /> */}
      </Container>

      <CustomText texto="Atomo CustomText" variante="subtitulo" />
      <Container>
        <CustomText texto="TITULO" variante="titulo" />
        <CustomText texto="Subtitulo" variante="subtitulo" mandatory />
        <CustomText
          texto="CustomText con ícono y obligatorio"
          variante="subtitulo"
          mandatory
          icon={<AccountCircle />}
        />
        <CustomText texto="Texto pequeño" variante="pequeño" mandatory />
      </Container>

      <CustomText texto="Atomo EmptyBox" variante="subtitulo" />
      <Container>
        <EmptyBox height={80} width={18} />
      </Container>

      <CustomText texto="Atomo CustomInput" variante="subtitulo" />
      <Container>
        <CustomInput placeholder="placeholder" size="small" />
        <CustomInput placeholder="placeholder" size="medium" />
        <CustomInput placeholder="placeholder" size="large" />
      </Container>

      <CustomText texto="Atomo SearchBar" variante="subtitulo" />
      <Container>
        <Search placeholder="search component" onSearch={() => {}} />
        <EmptyBox height={10} width={18} />
        <SearchBar
          placeholder="search component 2 "
          additionalElements={<Settings />}
          onSearch={() => {}}
        />
      </Container>

      <CustomText texto="Atomo CustomSwitch" variante="subtitulo" />
      <Container>
        <CustomSwitch switchState={switchState} handleSwitchState={handleSwitchState} />
      </Container>

      <CustomText texto="Atomo TabsAtomComponent" variante="subtitulo" />
      <Container>
        <TabsAtomComponent tabContentItem={['abc', 'abc', 'tab 3']} />
      </Container>

      <CustomText texto="Atomo CustomLabelGroup" variante="subtitulo" />
      <Container>
        <CustomLabelGroup texto1="Texto 1" texto2="CustomLabelGroup sin icono" />
        <EmptyBox height={30} width={18} />
        <CustomLabelGroup
          texto1="Texto 1"
          texto2="CustomLabelGroup con icono"
          icon={<AccountCircle />}
        />
      </Container>

      <CustomText texto="Organism CustomStepper" variante="subtitulo" />
      <Container>
        {/* <CustomStepper
          stepsData={[
            {
              id: 1,
              label: 'step 1',
              completed: false,
              optional: false,
            },
            {
              id: 2,
              label: 'step 2',
              completed: false,
              optional: true,
            },
          ]}
          activeStep={step}
          setActiveStep={setStep}
        /> */}
      </Container>
    </Container>
  );
};

export default CompoentesPage;
