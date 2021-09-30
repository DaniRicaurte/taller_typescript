

import { Course } from './course.js';
import { Student } from './student.js';

import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByRange: HTMLElement = document.getElementById("button-filterByRange")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement>document.getElementById("search-box")!;
const inputMinBox: HTMLInputElement = <HTMLInputElement>document.getElementById("min-box")!;
const inputMaxBox: HTMLInputElement = <HTMLInputElement>document.getElementById("max-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByRange.onclick = () => applyFilterByRange();

renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudent);

totalCreditElm.innerHTML = `${"Total Créditos:   " + getTotalCredits(dataCourses).toString()}`

function renderStudentInTable(students: Student[]): void {
    console.log('Desplegando estudiante');

    students.forEach((student) => {
        let trElement1 = document.createElement("tr");
        trElement1.innerHTML = `<td>${"Código"}</td>
                            <td>${student.codigo}</td>`;
        let trElement2 = document.createElement("tr");
        trElement2.innerHTML = `<td>${"Cédula"}</td>
                             <td>${student.codigo}</td> `;
        let trElement3 = document.createElement("tr");
        trElement3.innerHTML = `<td>${"Dirección"}</td>
                             <td>${student.direccion}</td> `;
        let trElement4 = document.createElement("tr");                     
        trElement4.innerHTML = `<td>${"Edad"}</td>
                             <td>${student.edad+" años"}</td>`;
        let trElement5 = document.createElement("tr");
        trElement5.innerHTML = `<td>${"Teléfono"}</td>
                             <td>${student.telefono}</td>`;
        studentTbody.appendChild(trElement1);
        studentTbody.appendChild(trElement2);
        studentTbody.appendChild(trElement3);
        studentTbody.appendChild(trElement4);
        studentTbody.appendChild(trElement5);
    });

}

function renderCoursesInTable(courses: Course[]): void {
    console.log('Desplegando cursos');
    courses.forEach((course) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
        coursesTbody.appendChild(trElement);
    });

}
function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
}

function applyFilterByName() {
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}

function applyFilterByRange() {
    let min = inputMinBox.value;
    let max = inputMaxBox.value;
    min = (min == '') ? '' : min;
    max= (max=='')? '':min;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByRange(min,max, dataCourses);
    renderCoursesInTable(coursesFiltered);
}

function searchCourseByRange(min: string,max: string, courses: Course[]) {
    return min === null && max==null ? dataCourses : courses.filter(c =>
        c.credits>= (+min) && c.credits>=(+max));
}

function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter(c =>
        c.name.match(nameKey));
}

function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);

        }
    }
}