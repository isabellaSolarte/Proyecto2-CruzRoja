import {
    CustomButton,
    CustomText,
    CustomColumn,
    DataTable,
    ManagmentLayout,
} from '../../components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCompensationPlanVoluntarioPage } from './hooks/usePlanVoluntarioPage'; 
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../core';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForestIcon from '@mui/icons-material/Forest';
import { Box } from '@mui/material';


const CompensationPlanPage = () => {
    const { t } = useTranslation('commons');
    const { compensationPlans, fetchCompensationPlan } = useCompensationPlanVoluntarioPage();
    const navigate = useNavigate();

    useEffect(() => {
        void fetchCompensationPlan();
    }, []);

    const handleCreateButtonClick = () => {
        navigate(PathNames.CREATE_PLAN);
    };
    const handleEditButtonClick = (compensationPlanId: string) => {
        navigate(PathNames.EDIT_PLAN.replace(':id', compensationPlanId));
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
                    content: t('generalButtonText.edit'),
                    variant: 'contained',
                    color: 'info',
                    icon: <EditIcon />,
                    onClick: (rowData: { id: string }) => handleEditButtonClick(rowData.id),
                },
                {
                    content: t('generalButtonText.edit'),
                    variant: 'contained',
                    color: 'info',
                    icon: <EditIcon />,
                    onClick: (rowData: { id: string }) => handleEditButtonClick(rowData.id),
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
                        content={t('generalButtonText.create')}
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
                </>
            }
        />
    );
};

export default CompensationPlanPage;