interface Alumno{
  id: string,
  name: string,
  age: number,
  birthdate: Date
  curso: string
}

class Inscripcion implements Alumno{
  id: string
  name: string
  age: number
  birthdate: Date
  curso: string

  constructor(id: string, name: string, age: number, birthdate: Date, curso: string){
    this.id = id
    this.name = name
    this.age = age
    this.birthdate = birthdate
    this.curso = curso
  }

  getName(){ return this.name }

  setName(name: string){
    this.name = name
    return this.name
  }

  getAge(){ return this.age }

  setAge(age: number){
    this.age = age
    return this.age
  }

  getBirthDate(){ return this.birthdate }

  setBirthDate(birthdate: Date){
    this.birthdate = birthdate
    return this.birthdate
  }

  getCurso(){ return this.curso }

  setCurso(curso: string){
    this.curso = curso
    return this.curso
  }

}

let alumno1 = new Inscripcion('Y9675905A', 'Samuel Rosales', 26, new Date('1996-10-23'), 'FullStack')
console.log(alumno1)
console.log(alumno1.getAge())
console.log(alumno1.getName())
console.log(alumno1.getCurso())
console.log(alumno1.setAge(20))
console.log(alumno1.setCurso('EL pepe'))
