
export interface BaseState<T> {
    data: T[] ,
    loading: boolean,
    error: boolean
}

export interface Reducer<T>{
 room: BaseState<T>,
}

  export interface IRoom {
    id: string,
    number: number,
    type: string,
    occupancy: number,
    isCheckedIn: boolean,
    checkInDate?: string,
    price: number,
    guest: string,
    features: string[],
    gallery: string[],
    description: string
  }
  

  export interface IDataService<K> {
    getRooms: () => Promise<K[]>
    checkUser: () => Promise<any>
  }