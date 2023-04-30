var Inscripcion = /** @class */ (function () {
    function Inscripcion(id, name, age, birthdate, curso) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
        this.curso = curso;
    }
    Inscripcion.prototype.getName = function () { return this.name; };
    Inscripcion.prototype.setName = function (name) {
        this.name = name;
        return this.name;
    };
    Inscripcion.prototype.getAge = function () { return this.age; };
    Inscripcion.prototype.setAge = function (age) {
        this.age = age;
        return this.age;
    };
    Inscripcion.prototype.getBirthDate = function () { return this.birthdate; };
    Inscripcion.prototype.setBirthDate = function (birthdate) {
        this.birthdate = birthdate;
        return this.birthdate;
    };
    Inscripcion.prototype.getCurso = function () { return this.curso; };
    Inscripcion.prototype.setCurso = function (curso) {
        this.curso = curso;
        return this.curso;
    };
    return Inscripcion;
}());
var alumno1 = new Inscripcion('Y9675905A', 'Samuel Rosales', 26, new Date('1996-10-23'), 'FullStack');
console.log(alumno1);
console.log(alumno1.getAge());
console.log(alumno1.getName());
console.log(alumno1.getCurso());
console.log(alumno1.setAge(20));
console.log(alumno1.setCurso('EL pepe'));
