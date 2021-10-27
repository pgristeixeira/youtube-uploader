export interface Video {
    path: string
    title: string
    description: string
    tags?: string[]
    language?: string
    playlist?: string
    function?: any
    thumbnail?: string
    onSuccess?: Function
}

export interface Credentials {
    email: string
    pass: string
    recoveryemail?: string | undefined
}