export interface Root {
    Accounts: Accounts
    Rooms: Room[]
  }
  
  export interface Accounts {
    user1: User1
    user2: User2
  }
  
  export interface User1 {
    password: string
    image: string
  }
  
  export interface User2 {
    password: string
    image: string
  }
  
  export interface Room {
    id: string
    number: number
    type: string
    occupancy: number
    isCheckedIn: boolean
    checkInDate?: string
    price: number
    guest: string
    features: string[]
    gallery: string[]
    description: string
  }
  