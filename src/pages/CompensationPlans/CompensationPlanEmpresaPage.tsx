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
import { useCompensationPlanEmpresaPage } from './hooks/useCompensationPlanEmpresaPage';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForestIcon from '@mui/icons-material/Forest';
import { CustomModal } from '../../components/orgamisms/CustomModal';
import { Grid, Typography, Alert,  Box } from '@mui/material';


const CompensationPlanEmpresaPage = () => {
    const { t } = useTranslation('commons');
    const { 
        user, 
        company,
        compensationPlans, 
        acquiredCompensationPlans, 
        fetchCompensationPlan, 
        fetchAcquiredCompensationPlan,
        getCompany, 
        loadingPlan,
        loadingAcquiredPlan,
        errorPlan,
        errorAcquiredPlan,
        onSubmit
    } = useCompensationPlanEmpresaPage();
    const navigate = useNavigate();
    const [modalState, setModalState] = useState(false);
    const [adquirirPlan, setAdquirirPlan] = useState([]);
    const [activeTabTitle, setActiveTabTitle] = useState('Planes');



    const body = {
        companyNit: null, 
        sellerId: user?.id,
        planId: 0,
    }
    const [formData, setFormData] = useState(body);

    useEffect(() => {
        void fetchCompensationPlan();
        void fetchAcquiredCompensationPlan();
        void getCompany();

    }, []);

    const handleCloseModal = () => {
        setModalState(false)
    };
    const handleAcquireButtonClick = (compensationPlan: any) => {
        getCompany()
        formData.planId = compensationPlan.id;
        formData.companyNit = company?.nit;
        setAdquirirPlan(compensationPlan);
        setModalState(true)
    };

    const handleViewButtonClick = (compensationPlanId: string) => {
        navigate(PathNames.VIEW_PLAN.replace(':id', compensationPlanId));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setModalState(false)
        setFormData(body)
    };

    const handleTabChange = (title: string) => {
        setActiveTabTitle(title);
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

    const getButtons = () => {
        if (activeTabTitle === 'Planes') {
            return [
                viewButton,
                acquireButton
            ];
        } else {
            return [
                viewButton
            ];
        }
    };
    

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
            buttonDetails: getButtons()
        }),
    ];

    return (
        <ManagmentLayout
            title={
                <Box>
                    <CustomText texto={t('compensationPlans.description')} variante='texto'/>
                </Box>
            }

            generalContents={
                <>
                    <TabsAtomComponent 
                    tabsHeaderTitle={['Planes', 'Mis Planes Adquiridos']}
                    onTabChange={handleTabChange}
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
                                                <CustomText texto={company?.name} variante='texto' color='black'/>
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
                                        type='submit'
                                        form='acquirePlanForm'
                                        style={{ marginLeft: '10px' }}
                                    />
                                }
                                onClose={handleCloseModal}
                            />
                        </>,
                        <>
                            {errorAcquiredPlan && <Alert severity="error">{errorAcquiredPlan}</Alert>}
                            {!loadingAcquiredPlan && !errorAcquiredPlan && (
                            <DataTable
                                key={0}
                                enableCheckboxSelection={false}
                                dataColumns={columns}
                                dataRows={acquiredCompensationPlans}
                            />
                            )}
                        </>
                    ]}
                    />
                    
                </>
            }
        />
    );
};

export default CompensationPlanEmpresaPage;
