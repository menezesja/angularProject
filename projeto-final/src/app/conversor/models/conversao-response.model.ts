export class ConversaoResponse {
    constructor( 
        public base: string,
        public date: string,
        public rates: any) {}
}

//{"base":"USD", "date":"2023-10-09", "rates":{"BRL":2.1405}}