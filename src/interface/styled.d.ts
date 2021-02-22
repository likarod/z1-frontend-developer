import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        body: string,
        opacity?: number,
        color:string;
        gradient?: string
        img?: string
    }
}