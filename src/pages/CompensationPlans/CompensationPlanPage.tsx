import {
    CustomButton,
    CustomText,
    CustomColumn,
    DataTable,
    ManagmentLayout,
    TabsAtomComponent,
} from '../../components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompensationPlanPage } from './hooks/usePlanPage';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ForestIcon from '@mui/icons-material/Forest';
import { CustomModal } from '../../components/orgamisms/CustomModal';
import { Grid, Typography, Alert, Autocomplete, Box, TextField } from '@mui/material';
import Swal from 'sweetalert2';


const CompensationPlanPage = () => {
    const { t } = useTranslation('commons');
    const { 
        user, 
        compensationPlans, 
        personalCompensationPlans, 
        companies, 
        fetchCompensationPlan, 
        fetchPersonalCompensationPlan,
        fetchCompanies, 
        hasPermission,
        loadingPlan,
        loadingPersonalPlan,
        loadingCompanies,
        errorPlan,
        errorPersonalPlan,
        errorCompanies,
        onSubmit
    } = useCompensationPlanPage();
    const navigate = useNavigate();
    const [modalState, setModalState] = useState(false);
    const [adquirirPlan, setAdquirirPlan] = useState([]);
    const [formData, setFormData] = useState({
        companyNit: null, // Puede ser 0 o null dependiendo de tu preferencia
        sellerId: user?.id,
        planId: 0,
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        void fetchCompensationPlan();
        void fetchPersonalCompensationPlan();
        void fetchCompanies();

    }, []);
/*     useEffect(() => {
        
    }, []); */

    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_PLAN);
    };
    const handleCreatePersonalButtonClick = () => {
        navigate(PathNames.CREATE_CUSTOM_PLAN);
    };
    const handleonCLoseModal = () => {
        setModalState(false)
    };
    const handleAcquireButtonClick = (compensationPlan: any) => {
        if(!loadingCompanies){
            formData.planId = compensationPlan.id;
            setAdquirirPlan(compensationPlan);
            setModalState(true)
        }else{
            void Swal.fire({
                title: t('alertText.generalError'),
                text: `${errorCompanies}`,
                icon: 'error',
                confirmButtonText: t('generalButtonText.accept'),
            })
        }
        
        //navigate(PathNames.EDIT_PLAN.replace(':id', compensationPlanId));
    };

    const handleViewButtonClick = (compensationPlanId: string) => {
        navigate(PathNames.VIEW_PLAN.replace(':id', compensationPlanId));
    };

    const handleEditButtonClick = (compensationPlanId: string) => {
        navigate(PathNames.EDIT_PLAN.replace(':id', compensationPlanId));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setModalState(false)
    };


    const handleCompanyChange = (event, newValue) => {
        setFormData((prevData) => ({
            ...prevData,
            companyNit: newValue ? newValue.value : null,
        }));
    };

    const viewButton = {
        content: t('generalButtonText.view'),
        variant: 'contained' as const,
        color: 'warning' as const,
        icon: <VisibilityIcon />,
        onClick: (rowData: { id: string }) => handleViewButtonClick(rowData.id),
    };

    const acquireButton = {
        content: t('generalButtonText.acquirePlan'),
        variant: 'contained' as const,
        color: 'success' as const,
        icon: <AttachMoneyIcon />,
        onClick: (rowData: { id: string }) => handleAcquireButtonClick(rowData),
    };

    const editButton = {
        content: t('generalButtonText.edit'),
        variant: 'contained',
        color: 'info',
        icon: <EditIcon />,
        onClick: (rowData: { id: string }) => handleEditButtonClick(rowData.id),
    };

const buttons = [
        viewButton,
        ...(hasPermission(1004) ? [editButton] : []),
        acquireButton
    ];
    
    
    const columns = [
        CustomColumn({
            field: 'name',
            headerName: t('compensationPlans.name'),
            format: 'text',
            variante: 'texto',
            icon: <ForestIcon color="success" />
        }),
        CustomColumn({
            field: 'price',
            headerName: t('compensationPlans.price'),
            width: 150,
            format: 'text',
            variante: 'texto',
        }),
        CustomColumn({
            field: 'discount',
            headerName: t('compensationPlans.discount'),
            width: 150,
            format: 'text',
            variante: 'texto',
        }),
        CustomColumn({
            field: 'total',
            headerName: t('compensationPlans.total'),
            width: 200,
            format: 'text',
            variante: 'texto',
        }),
        CustomColumn({
            field: 'actions',
            headerName: t('compensationPlans.actions'),
            width: 400,
            format: 'button',
            variante: 'texto',
            buttonDetails: buttons,
        }),
    ];

    return (
        <ManagmentLayout
            title={
                <Box>
                    <CustomText texto={t('pageTitles.compensationPlans')} variante="titulo" />
                    <Box>
                        <CustomText texto={t('compensationPlans.description')} variante='texto'/>
                    </Box>
                </Box>
            }
            actionsContent={
                <Box>
                    {hasPermission(1000)?
                        <CustomButton
                        content={t('generalButtonText.createPlan')}
                        variant="contained"
                        sx={{marginBottom:1}}
                        color="success"
                        onClick={handleCreateButtonClick}
                        style={{ marginLeft: '10px' }}
                        />
                    :
                        null    
                    }
                    {hasPermission(1001)?
                        <CustomButton
                        content={t('generalButtonText.createPlanEmpresa')}
                        variant="contained"
                        color="success"
                        onClick={handleCreatePersonalButtonClick}
                        type='submit'
                        form='acquirePlanForm'
                        style={{ marginLeft: '10px' }}
                        />
                    :
                        null    
                    }
                </Box>
            }
            generalContents={
                <>
                    <TabsAtomComponent 
                        tabsHeaderTitle={['Planes genéricos', 'Mis planes']}
                        tabsContent={[
                            <>
                                {errorPlan && <Alert severity="error">{errorPlan}</Alert>}
                                    {!loadingPlan && !errorPlan && (
                                    <DataTable
                                        key={0}
                                        enableCheckboxSelection={false}
                                        dataColumns={columns}
                                        dataRows={compensationPlans}
                                    />
                                )}
                            </>,
                            <>
                                {hasPermission(1002)?
                                    <>
                                        {errorPersonalPlan && <Alert severity="error">{errorPersonalPlan}</Alert>}
                                        {!loadingPersonalPlan && !errorPersonalPlan && (
                                        <DataTable
                                            key={0}
                                            enableCheckboxSelection={false}
                                            dataColumns={columns}
                                            dataRows={personalCompensationPlans}
                                        />
                                        )}
                                    </>
                                    :
                                    <Alert severity="error">No cuentas con los permisos para visualizar planes personales</Alert>
                                }

                            </>
                        ]}
                    />
                    <CustomModal 
                        open={modalState} 
                        title={
                            <Box sx={{marginTop: 5, marginLeft: 2}}>

                                <CustomText texto={t('pageTitles.acquirePlan')} variante='titulo' color='black'/>
                            </Box>
                        }
                        
                        generalContents={
                            <form id="acquirePlanForm" onSubmit={handleFormSubmit}>
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
                                    <Grid item xs={10} paddingTop={3} sx={{paddingLeft: 5}}>
                                        
                                    </Grid>

                                    <Grid item xs={12} paddingTop={3} sx={{display:"flex"}}>
                                        <CustomText texto='Plan de Compensación: ' variante='subtitulo' color='black'/>
                                        <Typography component="span">&nbsp;&nbsp;</Typography>
                                        <CustomText texto={adquirirPlan?.name} variante='texto' color='black'/>
                                    </Grid>

                                    <Grid item xs={12} paddingTop={3} sx={{display:"flex"}}>
                                        <CustomText texto='Costo: ' variante='subtitulo' color='black'/>
                                        <Typography component="span">&nbsp;&nbsp;</Typography>
                                        <CustomText texto={adquirirPlan?.total}  variante='texto' color='black'/>
                                    </Grid>
                                </Grid>
                            </form>
                        }
                        actionsContent={
                            <CustomButton
                                content={t('generalButtonText.acquirePlan')}
                                variant="contained"
                                color="success"
                                //onClick:  (rowData: { id: string }) => handleAcquireButtonClick(rowData.id)
                                type='submit'
                                form='acquirePlanForm'
                                style={{ marginLeft: '10px' }}
                            />
                        }
                        onClose={handleonCLoseModal}
                    />
                </>
            }
        />
    );
};

export default CompensationPlanPage;
