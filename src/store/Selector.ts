import { Reducer, IRoom, IAuth, BaseState } from "../models";

class Selector{

    getRooms = (state: Reducer<IRoom, IAuth>): IRoom[] => state.room.data;
    getRoomsState = (state: Reducer<IRoom, IAuth>) => state.room
    getAuth = (state: Reducer<IRoom, IAuth>): IAuth[] => state.auth.data;
    getAuthState = (state: Reducer<IRoom, IAuth>): boolean | undefined => state.auth.auth
    getErrorState = (state: Reducer<IRoom, IAuth>): boolean => state.auth.error
}


export default new Selector();