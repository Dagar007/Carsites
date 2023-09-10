import {DefautSession} from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            username: string
        } & DefautSession['user']
    }

    interface Profile {
        username: string
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        username: string,
        access_token?: string
    }
}