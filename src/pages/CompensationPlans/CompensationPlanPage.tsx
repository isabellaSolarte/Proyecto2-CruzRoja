import {
    CustomButton,
    CustomText,
    CustomColumn,
    DataTable,
    ManagmentLayout,
} from '../../components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompensationPlanPage } from './hooks/usePlanPage';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForestIcon from '@mui/icons-material/Forest';
import { Autocomplete, Box, TextField } from '@mui/material';
import { CustomModal } from '../../components/orgamisms/CustomModal';
import { Grid, Typography } from '@mui/material';

const CompensationPlanPage = () => {
    const { t } = useTranslation('commons');
    const { compensationPlans, fetchCompensationPlan } = useCompensationPlanPage();
    const navigate = useNavigate();
    const [modalState, setModalState] = useState(true);

    useEffect(() => {
        void fetchCompensationPlan();
    }, []);

    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_PLAN);
    };
    const handleAcquireButtonClick = (compensationPlanId: string) => {
        setModalState
        //navigate(PathNames.EDIT_PLAN.replace(':id', compensationPlanId));
    };

    const handleViewButtonClick = (ompensationPlanId: string) => {
        navigate(PathNames.VIEW_PLAN.replace(':id', ompensationPlanId));
    };

   


    console.log(compensationPlans);
    
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
            format: 'button',
            variante: 'texto',
            buttonDetails: [
                {
                    content: t('generalButtonText.view'),
                    variant: 'contained',
                    color: 'warning',
                    icon: <VisibilityIcon />,
                    onClick: handleViewButtonClick,
                },
                {
                    content: t('generalButtonText.acquirePlan'),
                    variant: 'contained',
                    color: 'success',
                    icon: <AttachMoneyIcon />,
                    onClick: (rowData: { id: string }) => handleAcquireButtonClick(rowData.id),
                },
            ],
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
            //description={<CustomText texto={t('compensationPlans.description')} variante='texto'/>}
            actionsContent={
                <Box>
                    <CustomButton
                        content={t('generalButtonText.createPlan')}
                        variant="contained"
                        color="success"
                        onClick={handleCreateButtonClick}
                        style={{ marginLeft: '10px' }}
                    />
                </Box>
            }
            generalContents={
                <>
                    <DataTable
                        enableCheckboxSelection={false}
                        dataColumns={columns}
                        dataRows={compensationPlans}
                    />
                    <CustomModal 
                    open={modalState} 
                    title={
                        <Box sx={{marginTop: 5, marginLeft: 2}}>

                            <CustomText texto={t('pageTitles.acquirePlan')} variante='titulo' color='black'/>
                        </Box>
                    }
                    
                    generalContents={
                            <Grid container spacing={4}>
                                <Grid item xs={12} paddingTop={3} sx={{display:"flex", justifyItems: "center"}}>
                                    <CustomText texto={'Cliente:'} variante={'subtitulo'} />
                                    <Typography component="span">&nbsp;&nbsp;</Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={ [
                                            { label: 'The Shawshank Redemption', year: 1994 },
                                            { label: 'The Godfather', year: 1972 }]}
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
                                        renderInput={(params) => <TextField {...params} label="Buscar y seleccionar cliente u empresa" />}
                                        />
                                </Grid>
                                <Grid item xs={10} paddingTop={3} sx={{paddingLeft: 5}}>
                                    
                                </Grid>

                                <Grid item xs={12} paddingTop={3} sx={{display:"flex"}}>
                                    <CustomText texto='Plan de Compensación: ' variante='subtitulo' color='black'/>
                                    <Typography component="span">&nbsp;&nbsp;</Typography>
                                    <CustomText texto='Dato2' variante='texto' color='black'/>
                                </Grid>

                                <Grid item xs={12} paddingTop={3} sx={{display:"flex"}}>
                                    <CustomText texto='Costo: ' variante='subtitulo' color='black'/>
                                    <Typography component="span">&nbsp;&nbsp;</Typography>
                                    <CustomText texto='Dato3' variante='texto' color='black'/>
                                </Grid>
                            </Grid>

                    }
                    actionsContent={
                        <CustomButton
                        content={t('generalButtonText.acquirePlan')}
                        variant="contained"
                        color="success"
                        //onClick:  (rowData: { id: string }) => handleAcquireButtonClick(rowData.id)
                        style={{ marginLeft: '10px' }}
                    />
                    }
                    onClose={handleCreateButtonClick}
                    />
                </>
            }
        />
    );
};

export default CompensationPlanPage;
