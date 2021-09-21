interface userProps {
    firstName: string
    lastName: string
    username: string
    email: string
    password: number
    cpf: string
    contato: number
    isAdmin: boolean
}

class User implements userProps {
    firstName!: string
    lastName!: string
    username!: string
    email!: string
    password!: number
    cpf!: string
    contato!: number
    isAdmin!: boolean

    constructor(firstName: string, lastName: string, username: string, email: string, password: number, cpf: string, contato: number, isAdmin: boolean) {
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contato = contato
        this.isAdmin = isAdmin
    }

    escreverPropriedades() {
        console.log(this.firstName)
        console.log(this.lastName)
        console.log(this.username)
        console.log(this.email)
        console.log(this.password)
        console.log(this.cpf)
        console.log(this.contato)
        console.log(this.isAdmin)
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: number) {
        this.password = password;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(cpf:string){
        this.cpf = cpf;
    }

    getContato(){
        return this.contato;
    }

    setContato(contato:number){
        this.contato = contato;
    }

    getIsAdmin(){
        return this.isAdmin;
    }

    setIsAdmin(isAdmin:boolean){
        this.isAdmin = isAdmin;
    }
}

let user = new User("Camila", "Chang", "camilachang", "camila@gmail.com", 1234, "123.456.789-12", 11123456789, true);

console.log(user)
