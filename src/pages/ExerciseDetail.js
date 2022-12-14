import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Box } from "@mui/material";

import {exerciseOptions, fetchData} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetail(){
    const [exerciseDetail, setExerciseDetail]= useState({})
    const { id } = useParams();

    useEffect(()=>{
        const fetchExercisesData =  async () =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            // url: 'https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D',

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }  
        fetchExercisesData();     
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail = {exerciseDetail}/>
            <ExerciseVideos/>
            <SimilarExercises/>
        </Box>
    )
}


export default ExerciseDetail;