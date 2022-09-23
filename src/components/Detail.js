
import {Typography, Stack, Button} from "@mui/material";

import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/body-part.png";

function Detail({ exerciseDetail }){

    if(typeof exerciseDetail !== "object" ){
        return (
            <h1>Loading</h1>
        )
    }

    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail; 

    const extraDetail = [
        {
            icon:BodyPart,
            name:bodyPart,
        },
        {
            icon:Target,
            name:target,
        },
        {
            icon:Equipment,
            name:equipment,
        },
    ]
    return (
        <Stack gap="60px" sx={{flexDirection:{ lg:'row' }, p:'20px', alignItems:'center'}}>
           <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
            <Stack sx={{ gap: {lg:'35px', xs:"20px"}}}>
                <Typography variant="h3">
                    {name}
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong. {name} {` `} is one of the best exercises to target your abs.
                    It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item)=> (
                    <Stack key={item.name} direction="row" gap="24px" alignItem>

                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail; 