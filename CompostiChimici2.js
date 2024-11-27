const paragraph = document.getElementById("result");
let elementi = [];

function changeTheme() {
    let CSSlink = document.querySelector("#stylesheet");
    if (CSSlink.href.includes("CompostiChimici.css")) {
        CSSlink.href = "CompostiChimici2.css";
    } else {
        CSSlink.href = "CompostiChimici.css";
    }
}

function trovaFormula(elementi) {
    let moli = [];
    let risultati = {};

    const atomicMasses = {
        "H": 1.0,
        "He": 4.0,
        "Li": 6.9,
        "Be": 9.0,
        "B": 10.8,
        "C": 12.0,
        "N": 14.0,
        "O": 16.0,
        "F": 19.0,
        "Ne": 20.2,
        "Na": 23.0,
        "Mg": 24.3,
        "Al": 27.0,
        "Si": 28.1,
        "P": 31.0,
        "S": 32.1,
        "Cl": 35.5,
        "Ar": 40.0,
        "K": 39.1,
        "Ca": 40.1,
        "Sc": 45.0,
        "Ti": 47.9,
        "V": 50.9,
        "Cr": 52.0,
        "Mn": 54.9,
        "Fe": 55.9,
        "Co": 59.0,
        "Ni": 58.7,
        "Cu": 63.5,
        "Zn": 65.4,
        "Ga": 69.7,
        "Ge": 72.6,
        "As": 74.9,
        "Se": 79.0,
        "Br": 79.9,
        "Kr": 83.8,
        "Rb": 85.5,
        "Sr": 87.6,
        "Y": 88.9,
        "Zr": 91.2,
        "Nb": 92.9,
        "Mo": 96.0,
        "Tc": 98.0,
        "Ru": 101.1,
        "Rh": 102.9,
        "Pd": 106.4,
        "Ag": 107.9,
        "Cd": 112.4,
        "In": 114.8,
        "Sn": 118.7,
        "Sb": 121.8,
        "Te": 127.6,
        "I": 126.9,
        "Xe": 131.3,
        "Cs": 132.9,
        "Ba": 137.3,
        "La": 138.9,
        "Ce": 140.1,
        "Pr": 140.9,
        "Nd": 144.2,
        "Pm": 145.0,
        "Sm": 150.4,
        "Eu": 152.0,
        "Gd": 157.3,
        "Tb": 158.9,
        "Dy": 162.5,
        "Ho": 164.9,
        "Er": 167.3,
        "Tm": 168.9,
        "Yb": 173.1,
        "Lu": 175.0,
        "Hf": 178.5,
        "Ta": 181.0,
        "W": 183.8,
        "Re": 186.2,
        "Os": 190.2,
        "Ir": 192.2,
        "Pt": 195.1,
        "Au": 197.0,
        "Hg": 200.6,
        "Tl": 204.4,
        "Pb": 207.2,
        "Bi": 209.0,
        "Po": 210.0,
        "At": 210.0,
        "Rn": 220.0,
        "Fr": 223.0,
        "Ra": 226.0,
        "Ac": 227.0,
        "Th": 232.0,
        "Pa": 231.0,
        "U": 238.0,
        "Np": 237.0,
        "Pu": 244.0,
        "Am": 243.0,
        "Cm": 247.0,
        "Bk": 247.0,
        "Cf": 251.0,
        "Es": 252.0,
        "Fm": 257.0,
        "Md": 258.0,
        "No": 259.0,
        "Lr": 262.0,
        "Rf": 261.0,
        "Db": 262.0,
        "Sg": 266.0,
        "Bh": 264.0,
        "Hs": 277.0,
        "Mt": 268.0,
        "Ds": 271.0,
        "Rg": 272.0,
        "Cn": 285.0,
        "Nh": 284.0,
        "Fl": 289.0,
        "Mc": 288.0,
        "Lv": 292.0,
        "Ts": 294.0,
        "Og": 294.0
    };

    elementi.forEach((elemento) => {
        const [massaElementoStr, nomeElemento] = elemento.split("-");
        const massaElemento = parseFloat(massaElementoStr.replace("g", ""));
        const massaAtomo = atomicMasses[nomeElemento];
        
        if (massaAtomo) {
            const mole = massaElemento / massaAtomo;
            moli.push({ elemento: nomeElemento, mole });
        } else {
            console.error(`Unknown element: ${nomeElemento}`);
        }
    });

    const molePiccola = Math.min(...moli.map(item => item.mole));

    moli.forEach(({ elemento, mole }) => {
        risultati[elemento] = mole / molePiccola;
    });

    let resultText = "";
    Object.entries(risultati).forEach(([nomeElemento, numero]) => {
        resultText += `${nomeElemento}: ${Math.round(numero)}\n`;
    });
    paragraph.innerText = resultText.trim();
}

document.getElementById('add').addEventListener('click', function() {
    const select = document.getElementById('massaElemento').value;
    const tipoElemento = document.getElementById('elemento').value;
    let added = document.getElementById("added");
    elementi.push(select + "-" + tipoElemento);
    added.innerText = "(" + tipoElemento + ": " + select + ") " + "è stato aggiunto"
});

document.getElementById('trova').addEventListener('click', function() {
    let added = document.getElementById("added");
    console.log(elementi);
    trovaFormula(elementi);
    added.innerText = "";
    elementi = [];
});

const non_metal = document.getElementsByClassName("non_metal");
const noble_gas = document.getElementsByClassName("noble_gas");
const alkali_metal = document.getElementsByClassName("alkali_metal");
const alkaline_earth_metal = document.getElementsByClassName("alkaline_earth_metal");
const metalloid = document.getElementsByClassName("metalloid");
const post_transition_metal = document.getElementsByClassName("post_transition_metal");
const transition_metal = document.getElementsByClassName("transition_metal");
const lanthanide = document.getElementsByClassName("lanthanide");
const actinide = document.getElementsByClassName("actinide");
const unknown = document.getElementsByClassName("unknown");
const placeholder = document.getElementById("placeholder")

function setDisplay(elements, displayValue) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.setProperty("display", displayValue);
    }
}

function non_metalli() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "block");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function gas_nobili() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "block");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function metalli_alcalini() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "block");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function metalli_alcalino_terrosi() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "block");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function metalloidi() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "block");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function post_metalli() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "block");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function trans_metalli() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "block");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function lantanoidi() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "block");
    setDisplay(actinide, "none");
    setDisplay(unknown, "none");
}

function attinoidi() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "block");
    setDisplay(unknown, "none");
}

function unknown_elements() {
    placeholder.selected = "selected";
    setDisplay(non_metal, "none");
    setDisplay(noble_gas, "none");
    setDisplay(alkali_metal, "none");
    setDisplay(alkaline_earth_metal, "none");
    setDisplay(metalloid, "none");
    setDisplay(post_transition_metal, "none");
    setDisplay(transition_metal, "none");
    setDisplay(lanthanide, "none");
    setDisplay(actinide, "none");
    setDisplay(unknown, "block");
}







