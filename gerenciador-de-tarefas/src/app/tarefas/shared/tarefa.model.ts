export class Tarefa{
    constructor( //? atributos opcionais, criar a tarefa sem passar o paramentro
        public id?: number,
        public nome?: string,
        public concluida?: boolean){}
}