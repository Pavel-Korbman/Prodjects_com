import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Оформление документов',
    'Ритуальные товары',
    'Залы прощания',
    'Катафальный транспорт',
    'Ведение церемонии',
];

export default function ServicesStepper() {
    return (
        <div className='type__margin '>
            <Box sx={{ width: '100%' }}>
                <Stepper className='stepper' activeStep={-1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>

    );
}
