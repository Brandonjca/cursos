"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        fullName: readformHtml("fullName"),
        identification: parseInt(readformHtml("identification")),
        direction: readformHtml("direction"),
        enrollment: parseInt(readformHtml("enrollment")),
        level: (readformHtml("level")),
    };
    students.push(currentStudent);
    console.table(students);
}
let teachers = [];
function addTeacher() {
    let currentTeacher = {
        fullName: readformHtml("fullNameTeacher"),
        identification: parseInt(readformHtml("identificationTeacher")),
        direction: readformHtml("directionTeacher"),
        title: readformHtml("title"),
        matter: readformHtml("matter")
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
let cursos = [];
function addCurso() {
    let currentCurso = {
        nameCurso: readformHtml("nameCurso"),
        paralelo: readformHtml("paralelo"),
        hora: parseInt(readformHtml("hora"))
    };
    cursos.push(currentCurso);
    console.table(cursos);
}
var course;
(function (course) {
    course["programacion"] = "programacion";
    course["metodologias"] = "metodologias";
    course["baseDeDatos"] = "Base de datos";
})(course || (course = {}));
function initCourse() {
    let courseBook = document.getElementById("course");
    let couse1 = Object.values(course);
    couse1.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        courseBook.add(option);
    });
}
initCourse();
let gradeBook = [];
function addgradeBookSetup() {
    let gradebook = {
        value: parseInt(readformHtml("value")),
        course: readformHtml("course"),
        activity: readformHtml("activity"),
        maxGrade: parseInt(readformHtml("maxGrade")),
    };
    gradeBook.push(gradebook);
    console.table(gradeBook);
}
let activity1 = [];
function addActivity() {
    let activityperson = {
        nombreActivity: readformHtml("activity"),
    };
    activity1.push(activityperson);
    console.table(activity1);
}
function readformHtml(id) {
    return (document.getElementById(id).value);
}
/*enum activity { tareas = "Tareas", examen = "Examen", trabajo = "Trabajo" }

function initActivity(): void {
    let activityBook = document.getElementById("activity") as HTMLSelectElement
    let activities = Object.values(activity);
    activities.forEach(
        (value) => {
            let option = document.createElement("option")
            option.value = value;
            option.text = value;
            activityBook.add(option);
        }
    )
}
initActivity();*/ 
