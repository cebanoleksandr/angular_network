export interface Message {
    id: number
    message: string
}

export interface Dialog {
    id: number
    username: string
    messages: Message[]
    image: string
}
