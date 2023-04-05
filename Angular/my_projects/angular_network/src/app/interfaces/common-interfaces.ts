export interface Post {
    id: number
    username: string
    message: string
    image: string
    likesCount: number
}

export interface Photos {
    small: string | null
    large: string | null
}

export interface User {
    name: string
    id: number
    photos: Photos
    uniqueUrlName?: string | null
    status: string | null
    followed: boolean
}

export interface UsersResponse {
    items: User[]
    totalCount: number
    error: [] | null
}

export interface CurrentUser {
    id: number
    email: string
    login: string
}

export interface AuthServiceData {
    data: CurrentUser
    messages: string[]
    resultCode: number
    fieldsErrors?: []
}
