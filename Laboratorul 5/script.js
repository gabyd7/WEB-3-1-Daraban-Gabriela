
// Tabloul inițial de studenți

let students = [
    {
        id: 1,
        name: "Ana Popescu",
        group: "SI-231",
        age: 19,
        specialty: "Securitate informațională",
        avatar: "👩‍💻"
    },
    {
        id: 2,
        name: "Mihai Rusu",
        group: "SI-231",
        age: 20,
        specialty: "Securitate informațională",
        avatar: "👨‍💻"
    },
    {
        id: 3,
        name: "Irina Ciobanu",
        group: "PR-232",
        age: 18,
        specialty: "Programare",
        avatar: "👩‍🎓"
    },
    {
        id: 4,
        name: "Andrei Munteanu",
        group: "PR-232",
        age: 21,
        specialty: "Programare",
        avatar: "👨‍🎓"
    },
    {
        id: 5,
        name: "Elena Marin",
        group: "WEB-233",
        age: 19,
        specialty: "Web Design",
        avatar: "👩‍🎨"
    }
];

// Selectarea elementelor HTML

const studentsList = document.getElementById("studentsList");
const studentCount = document.getElementById("studentCount");
const studentForm = document.getElementById("studentForm");

// Funcție pentru afișarea studenților

function displayStudents() {

    studentsList.innerHTML = "";

    studentCount.textContent = "Studenți: " + students.length;

    if (students.length === 0) {
        studentsList.innerHTML =
            '<p class="empty-message">Nu există studenți în listă. Adaugă un student nou!</p>';
        return;
    }

    students.forEach(function(student) {

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <div>
                <div class="student-info">

                    <div class="avatar">
                        ${student.avatar}
                    </div>

                    <div>
                        <h3 class="student-name">${escapeHTML(student.name)}</h3>
                        <p class="student-group">Grupa: ${escapeHTML(student.group)}</p>
                    </div>

                </div>

                <div class="student-details">

                    <div class="detail-row">
                        <span class="detail-label">Vârsta</span>
                        <strong class="detail-value">${student.age} ani</strong>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">Specialitatea</span>
                        <span class="detail-value">${escapeHTML(student.specialty)}</span>
                    </div>

                    <div class="detail-row">
                        <span class="detail-label">Statut</span>
                        <span class="status">Înmatriculat</span>
                    </div>

                </div>
            </div>

            <button class="delete-btn" data-id="${student.id}">
                Șterge
            </button>
        `;

        studentsList.appendChild(card);

    });

}

// Protejarea textului introdus în formular

function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

// Adăugarea unui student prin formular

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const group = document.getElementById("group").value.trim();
    const age = Number(document.getElementById("age").value);
    const specialty = document.getElementById("specialty").value.trim();
    const avatar = document.getElementById("avatar").value.trim();

    if (!name || !group || !specialty || !avatar) {
        alert("Completează toate câmpurile!");
        return;
    }

    if (!Number.isInteger(age) || age < 14 || age > 100) {
        alert("Vârsta trebuie să fie un număr întreg între 14 și 100!");
        return;
    }

    const newStudent = {
        id: Date.now(),
        name: name,
        group: group,
        age: age,
        specialty: specialty,
        avatar: avatar
    };

    students.push(newStudent);

    studentForm.reset();

    displayStudents();

    alert("Studentul a fost adăugat cu succes!");

});

// Ștergerea unui student după ID

studentsList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const studentId = Number(event.target.dataset.id);

        students = students.filter(function(student) {
            return student.id !== studentId;
        });

        displayStudents();

    }

});

// Schimbarea proprietății justify-content

const justifyButtons = document.querySelectorAll("[data-justify]");

justifyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.dataset.justify;

        studentsList.style.justifyContent = value;

        justifyButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});

// Schimbarea proprietății align-items

const alignItems = document.getElementById("alignItems");

alignItems.addEventListener("change", function() {

    studentsList.style.alignItems = alignItems.value;

});

// Schimbarea proprietății flex-wrap

const wrapBtn = document.getElementById("wrapBtn");
const nowrapBtn = document.getElementById("nowrapBtn");

wrapBtn.addEventListener("click", function() {

    studentsList.style.flexWrap = "wrap";

    wrapBtn.classList.add("active");
    nowrapBtn.classList.remove("active");

});

nowrapBtn.addEventListener("click", function() {

    studentsList.style.flexWrap = "nowrap";

    nowrapBtn.classList.add("active");
    wrapBtn.classList.remove("active");

});

// Modificarea distanței dintre carduri

const gapRange = document.getElementById("gapRange");
const gapValue = document.getElementById("gapValue");

gapRange.addEventListener("input", function() {

    const value = gapRange.value;

    studentsList.style.gap = value + "px";

    gapValue.textContent = value;

});

// Afișarea inițială a studenților

displayStudents();

// Setarea valorilor inițiale pentru Flexbox

studentsList.style.justifyContent = "flex-start";
studentsList.style.alignItems = "center";
studentsList.style.flexWrap = "wrap";
studentsList.style.gap = "18px";

document.querySelector('[data-justify="flex-start"]').classList.add("active");
wrapBtn.classList.add("active");
