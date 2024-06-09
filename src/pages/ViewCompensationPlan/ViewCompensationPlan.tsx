import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import { useEffect, useState } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import {ManagmentLayout, CustomButton, CustomText, CustomColumn,DataTable, CustomModal,} from '../../components';
import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { green } from '@mui/material/colors';
import { useViewCompensationPlan } from './hooks/useViewCompensationPlan';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const ViewCompensationPage = () => {
    const { t } = useTranslation('commons');
    const { currentPlan,  fetchPlan, handleEdit, allowed, fetchActionById,actionSelect,setIdAction, onSubmit, user, companies, fetchCompanies  } = useViewCompensationPlan();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showModalAcquire, setShowModalAcquire] = useState(false);
    const [formData, setFormData] = useState({
      companyNit: null, 
      sellerId: user?.id,
      planId: 0,
    });
    const [error, setError] = useState(false);
    useEffect(() => {
      void fetchPlan();
      void fetchCompanies();
      
    }, []);

    const actionsWithIds = currentPlan.actions.map((action, index) => ({
      id: action.action.id || index ,
      name: action.action.name,
      footPrintUnity: action.action.footPrintUnity,
      quantity: action.quantity,
      unitaryPrice: action.action.unitaryPrice
    }));

    const handleViewButtonClick = (actionId: number) => {
      setIdAction(actionId)
      fetchActionById(actionId)
      console.log(actionSelect?.name)
      setShowModal(true)
    };

    const handleAcquireButtonClick = () =>{
        setShowModalAcquire(true)
    }
    const handleFormSubmit = (event) => {
      event.preventDefault();
      onSubmit(formData);
      setShowModalAcquire(false)
  };

  const handleCompanyChange = (event: any, newValue) => {
    setFormData((prevData) => ({
        ...prevData,
        companyNit: newValue ? newValue.value : null,
    }));
};
    

  const columns = [
    CustomColumn({
      icon: <RecyclingIcon color="success" />,
      width: 200,
      field: 'name',
      headerName: t('generalTableHeaders.actions'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 150,
      field: 'footPrintUnity',
      headerName: t('generalTableHeaders.ufp'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 150,
      field: 'quantity',
      headerName: t('generalTableHeaders.quantity'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      width: 200,
      field: 'unitaryPrice',
      headerName: t('generalTableHeaders.cost'),
      format: 'text',
      variante: 'texto',
    }),
    CustomColumn({
      field: 'options',
      headerName: t('actionsPage.actionsTable.options'),
      width: 300,
      format: 'button',
      variante: 'texto',
      buttonDetails: [
        {
          content: t('generalButtonText.view'),
          variant: 'contained',
          color: 'warning',
          icon: <VisibilityIcon />,
          onClick: (rowData: { id: number }) => handleViewButtonClick(rowData.id),
        },
      ],
    }),
  ];
  return (
    <ManagmentLayout
      title={<CustomText texto={currentPlan.name} variante="titulo" />}
      actionsContent={
        <>
          {!allowed && ( 
            <CustomButton
              content={t('generalButtonText.edit')}
              variant="contained"
              color="info"
              icon={<EditIcon />}
              onClick={handleEdit}
              style={{ marginLeft: '10px' }}
            />
          )}
          <CustomButton
            content={'Adquirir'}
            variant="contained"
            color="info"
            icon={<AttachMoneyIcon style={{ color: green[500] }} />}
            onClick={handleAcquireButtonClick}
            style={{
              marginLeft: '10px',
              backgroundColor: 'transparent', 
              border: '2px solid green',
              color: 'green', 
              padding: '10px 20px', 
            }} />
        </>
      }
      generalContents={
        <Grid>
           <Box mb={10}>
            <CustomText texto={currentPlan.description} variante="subtitulo" styles={{ fontWeight: 'normal',marginTop: '16px', marginBottom: '20px' }}/>
            <div style={{ display: 'inline-block' }}>
              <h3 style={{ fontWeight: 'bold', display: 'inline' }} >Compensación total:</h3>
              <h3 style={{ fontWeight: 'normal', display: 'inline' }}> {currentPlan.ufpCompensation} ufp</h3>
            </div>
            <br />
            <div style={{ display: 'inline-block' }}>
              <h3 style={{ fontWeight: 'bold', display: 'inline' }} >Costo del plan:</h3>
              <h3 style={{ fontWeight: 'normal', display: 'inline' }}> {currentPlan.price} COP</h3>
            </div>
          </Box>
          <DataTable 
            enableCheckboxSelection={false} 
            dataColumns={columns} 
            dataRows={actionsWithIds}
            />
            {showModal && (
              <CustomModal
                open={showModal}
                title={
                        <CustomText texto={actionSelect?.name ?? ''} variante="titulo" />
                      }
                description={
                  <Box  sx={{borderBottom: '1px solid #C8C8C8'}}> 
                    <CustomText texto={actionSelect?.description ?? ''} variante="texto"  />
                  </Box>
                  }
                generalContents={
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex' }} >
                      <CustomText  texto={'Total UFP:'} variante="texto" styles={{ fontWeight: 'bold' }} icon={<EnergySavingsLeafIcon color="success" />}/>
                      <CustomText texto={'' + (actionSelect?.footPrintUnity ?? '')} variante="texto" />
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <CustomText texto={'Costo $: '} variante="texto" styles={{ fontWeight: 'bold', marginRight: '0.5rem' }} icon={<EnergySavingsLeafIcon color="success" />}/>
                      <CustomText texto={' ' + (actionSelect?.unitaryPrice ?? '') + ' COP'} variante="texto" />
                    </Box>
                  </Box>
                }
                
                onClose={() => setShowModal(false)}
              />
            )}
            { showModalAcquire && (
              <CustomModal 
              open={showModalAcquire}
              title={
                    <h2>Adquirir plan de compensación</h2>
              }
              description={
                <Box> 
                    <div style={{ display: 'inline-block' }}>
                      <h3 style={{ fontWeight: 'bold', display: 'inline' }} >Plan de compensación:</h3>
                      <h3 style={{ fontWeight: 'normal', display: 'inline' }}> {currentPlan.name}</h3>
                    </div>
                    <div style={{ display: 'inline-block' }}>
                      <h3 style={{ fontWeight: 'bold', display: 'inline' }} >Descripción:</h3>
                      <h3 style={{ fontWeight: 'normal', display: 'inline' }}> {currentPlan.description}</h3>
                    </div>
                </Box>
              }
                generalContents={
                  <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom : 5 }}>
                  
                    <form id="acquirePlanForm" onSubmit={handleFormSubmit}>
                          <div style={{ display: 'inline-block' }}>
                            <h3 style={{ fontWeight: 'bold', display: 'inline' }} >Costo total del plan:</h3>
                            <h3 style={{ fontWeight: 'normal', display: 'inline' }}> {currentPlan.price} COP</h3>
                          </div>
                      <Grid container spacing={4}>
                        <Grid item xs={12} paddingTop={3} sx={{display:"flex", justifyItems: "center"}}>
                          <CustomText texto={'Cliente:'} variante={'subtitulo'} />
                            <Typography component="span">&nbsp;&nbsp;</Typography>
                              <Autocomplete
                                disablePortal
                                id="company-autocomplete"
                                options={companies}
                                getOptionLabel={(option) => option.label}
                                onChange={handleCompanyChange}
                                sx={{
                                    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                                        color: 'black',
                                    },
                                    width: 500,
                                    minWidth: 250,
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                    },
                                }}
                                renderInput={(params) => (
                                  <TextField
                                      {...params}
                                      label="Buscar y seleccionar cliente u empresa"
                                      required
                                      error={error && !formData.companyNit}
                                      helperText={error && !formData.companyNit ? 'Este campo es obligatorio.' : ''}
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          
                      </form>
                  </Box>
                  





                }
                actionsContent={
                  <CustomButton
                  content={t('generalButtonText.acquirePlan')}
                  variant="contained"
                  color="success"
                  type='submit'
                  form='acquirePlanForm'
                  style={{ marginLeft: '10px' }}
              />
              }
              onClose={() => setShowModalAcquire(false)}
              />
            )

            }
        </Grid>
      }
    />
  );

};
export default ViewCompensationPage;



