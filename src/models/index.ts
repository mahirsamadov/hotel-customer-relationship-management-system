
export interface BaseState<T> {
    auth?: boolean
    data: T[] ,
    loading: boolean,
    error: boolean
}

export interface Reducer<T, K>{
 room: BaseState<T>,
 auth: BaseState<K>
}

export interface IAuth{
  image: string,
  username: string
  password: string
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