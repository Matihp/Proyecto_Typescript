import { Box, Button, Divider} from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import  {autoPlay}  from 'react-swipeable-views-utils';

type HeaderProps={
    title:string,
    description:string,
    element?:React.ReactNode | null,
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: '1',
    imgPath:
      'https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&partner=hbomaxcom&v=9066a4b1774a14799596582121109312&host=art-gallery.api.hbo.com&language=es-es&w=1280',
  },
  {
    label: '2',
    imgPath:
      'https://imagenes.elpais.com/resizer/G5ETyNCBY33u7wWqt39nes3Tp_Q=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg',
  },
  {
    label: '3',
    imgPath:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2016/10/rick-morty-critica.jpg?itok=rCQqumI-',
  },
  {
    label: '4',
    imgPath:
      'https://hips.hearstapps.com/vidthumb/images/rick-y-morty-1626783132.jpg',
  },
];

export const HeaderComponent:React.FC<HeaderProps>=({title,description,element})=>{
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    
    return (
        <div style={{display:'flex',justifyContent:'center',marginTop:'5px'}}>   
        <Box sx={{ maxWidth: 800, flexGrow: 1}}>
   
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        sx={{
                        height: 350,
                        display: 'block',
                        maxWidth: 800,
                        overflow: 'hidden',
                        width: '100%',
                        }}
                        src={step.imgPath}
                        alt={step.label}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    
                </Button>
                }
            />
        </Box>
            <Divider/>
        </div>
    )
}