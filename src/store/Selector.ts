import { Reducer, Room } from "../models";

class Selector{

    getRooms = (state: Reducer<Room>): Room[] => state.room.data;
}


export default new Selector();