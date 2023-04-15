
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
  