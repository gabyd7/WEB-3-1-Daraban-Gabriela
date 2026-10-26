let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Lista fructe:", fructe);
console.log("Primul fruct:", fructe[0]);
console.log("Ultimul fruct:", fructe[fructe.length - 1]);
console.log("Numărul de fructe:", fructe.length);

document.getElementById("fructe").textContent = fructe.join(", ");
document.getElementById("primulFruct").textContent = "Primul element: " + fructe[0];
document.getElementById("ultimulFruct").textContent = "Ultimul element: " + fructe[fructe.length - 1];
document.getElementById("numarFructe").textContent = "Număr de elemente: " + fructe.length;


let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();

console.log("Lista finală de orașe:", orase);

document.getElementById("orase").textContent = orase.join(", ");


let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
    let lista = document.getElementById("listaProduse");

    lista.innerHTML = "";

    if (produse.length === 0) {
        lista.textContent = "Lista este goală!";
        return;
    }

    produse.forEach(function(produs) {
        lista.innerHTML += `
            <span class="produs">${produs}</span>
        `;
    });
}

function adaugaSfarsit() {
    let input = document.getElementById("produs");
    let produs = input.value.trim();

    if (produs === "") {
        alert("Introdu un produs!");
        return;
    }

    produse.push(produs);

    input.value = "";

    afiseazaProduse();
}

function adaugaInceput() {
    let input = document.getElementById("produs");
    let produs = input.value.trim();

    if (produs === "") {
        alert("Introdu un produs!");
        return;
    }

    produse.unshift(produs);

    input.value = "";

    afiseazaProduse();
}

function stergePrimul() {
    produse.shift();

    afiseazaProduse();
}

function stergeUltimul() {
    produse.pop();

    afiseazaProduse();
}


let elevi = [
    {
        nume: "Popescu Ana",
        varsta: 17,
        nota: 9
    },
    {
        nume: "Rusu Mihai",
        varsta: 18,
        nota: 8
    },
    {
        nume: "Ciobanu Maria",
        varsta: 17,
        nota: 10
    }
];

function afiseazaElevi() {
    let catalog = document.getElementById("catalog");
    let numarElevi = document.getElementById("numarElevi");

    catalog.innerHTML = "";

    numarElevi.textContent = "Număr de elevi: " + elevi.length;

    elevi.forEach(function(elev, index) {
        catalog.innerHTML += `
            <div class="elev">
                <h3>${index + 1}. ${elev.nume}</h3>
                <p>Vârsta: ${elev.varsta}</p>
                <p>Nota: ${elev.nota}</p>
            </div>
        `;
    });
}

function adaugaElev() {
    let nume = document.getElementById("nume").value.trim();
    let varsta = document.getElementById("varsta").value;
    let nota = document.getElementById("nota").value;

    if (nume === "" || varsta === "" || nota === "") {
        alert("Completați toate câmpurile!");
        return;
    }

    let elevNou = {
        nume: nume,
        varsta: Number(varsta),
        nota: Number(nota)
    };

    elevi.push(elevNou);

    document.getElementById("nume").value = "";
    document.getElementById("varsta").value = "";
    document.getElementById("nota").value = "";

    afiseazaElevi();
}

function stergeElev() {
    let nume = document.getElementById("numeStergere").value.trim();

    let pozitie = elevi.findIndex(function(elev) {
        return elev.nume.toLowerCase() === nume.toLowerCase();
    });

    if (pozitie === -1) {
        alert("Elevul nu a fost găsit!");
        return;
    }

    elevi.splice(pozitie, 1);

    document.getElementById("numeStergere").value = "";

    afiseazaElevi();
}

function cautaElev() {
    let nume = document.getElementById("numeCautare").value.trim();

    let elevGasit = elevi.find(function(elev) {
        return elev.nume.toLowerCase() === nume.toLowerCase();
    });

    let rezultat = document.getElementById("rezultatCautare");

    if (elevGasit) {
        rezultat.innerHTML = `
            Elev găsit!<br><br>
            Nume: ${elevGasit.nume}<br>
            Vârsta: ${elevGasit.varsta}<br>
            Nota: ${elevGasit.nota}
        `;
    } else {
        rezultat.textContent = "Elevul nu a fost găsit!";
    }
}

afiseazaProduse();
afiseazaElevi();