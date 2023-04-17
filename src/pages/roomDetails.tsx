import { uuidv4 } from "@firebase/util";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { Button, Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import {
  fetchSingleDataRequest,
} from "../store/actionCreators";
import Selector from "../store/Selector";
import zIndex from "@mui/material/styles/zIndex";



export const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const room = useSelector(Selector.getRooms);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchSingleDataRequest(id));
  }, []);

 


  return (
    <Box className="w-full h-full my-2">
   <Button className="flex items-center justify-center" type="link" icon={<HomeOutlined />} onClick={() => navigate(-1)}>Back Home</Button>
      <Box className="flex">
      <Carousel style={{position: "relative", margin: '0 1rem', width: '500px', height: '300px'}}>
      {
        room[0].gallery.map(image => (
          <div key={uuidv4()}>
            <img style={{width: '500px', height: '300px'}} src={image}></img>
          </div>
        ))
      }
    </Carousel>
    <Box className="info flex flex-col gap-2 w-full">
      <b className="text-xl">{room[0].type}</b>
      <span className="font-thin"><b>Type: </b>{room[0].type}</span>
      <span className="font-thin"><b>Occupancy: </b>{room[0].occupancy}</span>
      <span className="font-thin"><b>Price: </b>{room[0].price}</span>
      <span className="font-thin"><b>Guest: </b>{room[0].guest}</span>
    </Box>
    <Box className='w-full flex flex-col h-full justify-end gap-2 mx-4'>
      <Box className='buttons flex gap-2 w-full justify-end'>
        <Button>Check In</Button>
        <Button className="bg-blue-500 text-white hover:text-white hover:bg-white">Check Out</Button>
      </Box>
      <b>Features</b>
     <Box className=''>
     {
        room[0].features.map(feature => (
          <span className="font-thin text-xs">{feature}</span>
        ))
      }
     </Box>
    </Box>
      </Box>
      <Box className="description mx-4 my-4 flex">
        <b className="mx-2">Description</b>
        <p className="font-thin text-xs">
          {room[0].description}
        </p>
      </Box>
      </Box>
  );
};
