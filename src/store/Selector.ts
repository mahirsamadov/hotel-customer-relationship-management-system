import { Reducer, IRoom, IAuth } from "../models";

class Selector{

    getRooms = (state: Reducer<IRoom, IAuth>): IRoom[] => state.room.data;
    getAuth = (state: Reducer<IRoom, IAuth>): IAuth[] => state.auth.data;
    getAuthState = (state: Reducer<IRoom, IAuth>): boolean | undefined => state.auth.auth
    getErrorState = (state: Reducer<IRoom, IAuth>): boolean => state.auth.error
}


export default new Selector();