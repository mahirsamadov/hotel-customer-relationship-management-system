import { onValue, ref, remove, get, update } from "firebase/database";
import { db } from "../config/firebase";
import { IDataService, Room } from "../models";

class DataService<Room> implements IDataService<Room>{

    constructor(private db: any) {
        this.db = db
     }
    
    getRooms = async (): Promise<Room[]> => {
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
    
    getRoom = async (id: string): Promise<Room> => {
        const roomsRef = ref(this.db, 'rooms/' + id);
        const snapshot = await get(roomsRef);
        if (snapshot.exists()) {
        return snapshot.val();
        } else {
        console.log("No data available");
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