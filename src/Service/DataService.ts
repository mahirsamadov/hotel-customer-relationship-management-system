import { onValue, ref, remove, get, update } from "firebase/database";
import { db } from "../config/firebase";
import { IDataService, IRoom } from "../models";

class DataService<Room> implements IDataService<IRoom>{

    constructor(private db: any) {
        this.db = db
     }
    
    getRooms = async (): Promise<IRoom[]> => {
        const roomsRef = ref(this.db, 'Rooms');
        const snapshot = await get(roomsRef);
        if (snapshot.exists()) {
            console.log(snapshot.val());
        return snapshot.val();
        } else {
        console.log("No data available");
        return [];
        }
    }
    
    getRoom = async (id: any): Promise<Room> => {
        const roomsRef = ref(this.db, 'Rooms');
        console.log("From ", id)
        const snapshot = await (await get(roomsRef));
        if (snapshot.exists()) {
         console.log("From ", snapshot.val().filter((room: IRoom) => room.id === id))
        return snapshot.val()
        } else {
        console.log("No data available for:", id);
        return {} as Room;
        }
    }
    
    // updateRoom = async (id: string, room: Room): Promise<void> => {
    //     const roomsRef = ref(this.db, 'rooms/' + id);
    //     await update(roomsRef, room);
    // }
    
    // deleteRoom = async (id: string): Promise<void> => {
    //     const roomsRef = ref(this.db, 'rooms/' + id);
    //     await remove(roomsRef);
    // }
    
    checkAuth = async (): Promise<boolean> => {
        return true;
    }
    


}


export default new DataService(db);