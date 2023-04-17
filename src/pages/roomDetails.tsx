import { uuidv4 } from "@firebase/util";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";
import { retry } from "redux-saga/effects";
import DataService from "../Service/DataService";
import {
  fetchDataRequest,
  fetchSingleDataRequest,
} from "../store/actionCreators";
import Selector from "../store/Selector";


export const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const room = useSelector(Selector.getRooms);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchSingleDataRequest(id));
  }, []);


  return (
    <Box className="flex w-[100vw] h-[100vh] flex-col py-2 px-8 gap-2 items-center overflow-scroll">
      <Button onClick={()=> navigate(-1)}>Back</Button>
      <Typography variant="h3">{room[0]?.type}</Typography>
      <Typography variant="h6">{room[0]?.description}</Typography>
      
      <ImageList sx={{ width: 1000, height: 800 }} variant="woven" cols={3} gap={8}>
  {room[0]?.gallery.map((item:any) => (
    <ImageListItem key={uuidv4()}>
      <img
        src={`${item}`}
        srcSet={`${item}`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
<Typography variant="h5">Guest: {room[0]?.guest}</Typography>
<Typography variant="h5">Size: {room[0]?.occupancy}m<sup>2</sup></Typography>
<Typography variant="h5">Price: {room[0]?.price}$</Typography>
    </Box>
  );
};
