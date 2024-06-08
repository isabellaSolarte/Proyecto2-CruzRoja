import { useTranslation } from 'react-i18next';
import { CustomButton, CustomText, CustomInput, ErrorText } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useCreateRolForm } from '../hooks/useCreateRolForm';
import { PermissionCard } from '../Components';
import { PathNames } from '../../../core';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { permissionMessages } from '../Components/PermissionsMessages';

const FormRoleData = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation('commons');
  const handleCreateButtonClick = () => {
    navigate(PathNames.ROLES);
  };

  const {
    permissionList,
    errors,
    rolData,
    loadRolData,
    register,
    addRole,
    removeRole,
    onSubmit,
    handleSubmit,
    reset,
  } = useCreateRolForm();

  useEffect(() => {
    loadRolData();
  }, []);

  useEffect(() => {
    if (rolData?.permissions) {
      rolData.permissions.forEach(permission => {
        addRole(permission);
      });
    }
    reset(rolData);
  }, [rolData]);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredPermissons = permissionList.filter(permission =>
    permissionMessages[permission.id].toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={4}>
          <CustomText texto={t('rolesPages.roleForm.name')} variante="subtitulo" mandatory />

          <CustomInput
            placeholder="Nombre rol"
            defaultValue={rolData?.typeRole}
            props={register('typeRole')}
            size="medium"
          />
          {errors.typeRole && (
            <ErrorText error={errors.typeRole.message} formErrorKey="userFormErrorsRole" />
          )}
        </Box>

        <Box mt={5} sx={{ borderTop: '1px solid #C8C8C8', paddingTop: '20px' }}>
          <CustomText texto={'Listar los permisos'} variante="subtitulo" mandatory />
          <TextField
            fullWidth
            placeholder={t('registerCategory.placeholderSearch')}
            value={searchTerm}
            onChange={handleSearch}
            variant="outlined"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            style={{
              borderRadius: 5,
              margin: '10px ',
              border: '1px solid #ccc',
            }}
          />
          {filteredPermissons.map(permission => (
            <PermissionCard
              key={permission.id}
              permission={permission}
              addedPermissions={rolData?.permissions ? rolData.permissions : []}
              positiveAction={addRole}
              negativeAction={() => {
                removeRole(permission.name);
              }}
              //props={register('permissions')}
            />
          ))}
          {errors.permissions && (
            <ErrorText error={errors.permissions.message} formErrorKey="userFormErrorsRole" />
          )}
        </Box>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <CustomButton content={t('components.stepper.back')} onClick={handleCreateButtonClick} />
          <CustomButton
            content={t('generalButtonText.save')}
            type="submit"
            variant="contained"
            color="success"
          />
        </Box>
      </form>
    </Box>
  );
};

export default FormRoleData;
