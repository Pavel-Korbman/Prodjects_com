import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';


// const steps = [
//     'Оформление документов',
//     'Ритуальные товары',
//     'Залы прощания',
//     'Катафальный транспорт',
//     'Ведение церемонии',
// ];

const steps = [
    {
        title: 'Оформление документов',
        text: 'Взаимодействие с моргом, кладбищем, крематорием и администрацией'
    },
    {
        title: 'Ритуальные товары',
        text: 'Весь спектр ритуальных товаров и всго необходимого для проведения достойного траурного мероприятия'
    },
    {
        title: 'Залы прощания',
        text: 'Ритуальные залы разной вместимости с возможностью проведения поминальной трапезы'
    },
    {
        title: 'Катафальный транспорт',
        text: 'Большой выбор для перевозки в морг и сопровождения к месту прощания'
    },
    {
        title: 'Ведение церемонии',
        text: 'Контроль на всех этапах прощания – от подготовки тела до поминальной трапезы'
    }
];

export default function ServicesStepper() {
    return (
        <div className='type__margin'>

            <Typography className='pages__title' variant="h4" gutterBottom>
                Процесс организации похорон
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Stepper className='stepper' activeStep={-1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label.title}>
                            <StepLabel className='stepper__item'>
                                <Typography
                                    className="head-banner__line "
                                    variant="body1"
                                    component="p"
                                    sx={{
                                        display: { xs: 'flex', md: 'flex' },
                                        fontWeight: 500,
                                        letterSpacing: '.1rem',
                                        color: '$grayText',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {label.title}
                                </Typography>
                                <Typography className='stepper__text'>
                                    {label.text}
                                </Typography>


                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>

    );
}
