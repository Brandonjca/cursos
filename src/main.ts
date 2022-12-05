import { Activity } from "./entities/actividades.entity";
import { Cursos } from "./entities/cursos.entity";
import { gradeBookSetup } from "./entities/gradeBookSetup.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students: Student[] = [];

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readformHtml("fullName"),
        identification: parseInt(readformHtml("identification")),
        direction: readformHtml("direction"),
        enrollment: parseInt(readformHtml("enrollment")),
        level: (readformHtml("level")),

    }
    students.push(currentStudent);
    console.table(students)
}

let teachers: Teacher[] = [];

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readformHtml("fullNameTeacher"),
        identification: parseInt(readformHtml("identificationTeacher")),
        direction: readformHtml("directionTeacher"),
        title: readformHtml("title"),
        matter: readformHtml("matter")
    }
    teachers.push(currentTeacher);
    console.table(teachers)
}

let cursos: Cursos[] = [];

function addCurso(): void {
    let currentCurso: Cursos = {
        nameCurso: readformHtml("nameCurso"),
        paralelo: readformHtml("paralelo"),
        hora: parseInt(readformHtml("hora"))
    }
    cursos.push(currentCurso);
    console.table(cursos)
}

enum course { programacion = "programacion", metodologias = "metodologias", baseDeDatos = "Base de datos" }

function initCourse(): void {
    let courseBook = document.getElementById("course") as HTMLSelectElement
    let couse1 = Object.values(course);
    couse1.forEach(
        (value) => {
            let option = document.createElement("option")
            option.value = value;
            option.text = value;
            courseBook.add(option);
        }
    )
}
initCourse();


let gradeBook: gradeBookSetup[] = [];

function addgradeBookSetup(): void {
    let gradebook: gradeBookSetup = {
        value: parseInt(readformHtml("value")),
        course: readformHtml("course"),
        activity: readformHtml("activity"),
        maxGrade: parseInt(readformHtml("maxGrade")),
    }
    gradeBook.push(gradebook);
    console.table(gradeBook);
}

let activity1: Activity[] = [];

function addActivity(): void {
    let activityperson: Activity = {
        nombreActivity: readformHtml("activity"),
    }
    activity1.push(activityperson);
    console.table(activity1);
}

function readformHtml(id: string): string {
    return ((<HTMLInputElement>document.getElementById(id)).value)
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