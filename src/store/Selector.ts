import { Reducer, IRoom } from "../models";

class Selector{

    getRooms = (state: Reducer<IRoom>): IRoom[] | IRoom => state.room.data;
}


export default new Selector();