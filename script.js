
/* Definition of variables */
const bmiResults = document.querySelector('.bmi');
const bmiAnalysis = document.querySelector('.bmi-analysis');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const bmiData = [
    {name: "Vous êtes trop maigre.", color: "red", range: [0, 18.5]},
    {name: "Vous avez une corpulence normale.", color: "green", range: [18.5, 25]},
    {name: "Vous êtes en surpoids.", color: "red", range: [25, 30]},
    {name: "Vous êtes obèse.", color: "red", range: [30, 35]},
    {name: "Vous êtes très obèse.", color: "red", range: 35}
];

/* Form submission */

form.addEventListener('submit', handleForm);

/* Handle form */

function handleForm(e) {
    e.preventDefault();
    calculateBMI();
}

/* BMI calculation 
 IMC = weight(kg) / height**2 en mètres */

 function calculateBMI() {
     const height = inputs[0].value;
     const weight = inputs[1].value;

     if(!height || !weight || height <= 0 || weight <= 0) { 
         handleError();
         return;
     }

     const imc = (weight / Math.pow(height/100, 2)).toFixed(1);
     showResult(imc);
 }

/* Error function */

function handleErro() {
    bmiResults.textContent = "Oups";
    bmiResults.style.color = "inherit";  
    bmiAnalysis.textContent = "Veuillez remplir les deux champs svp";
}

/* Show results */

function showResult(imc) {
    const rank = bmiData.find(data => {
        if(imc >= data.range[0] && imc < data.range[1]) return data;
        else if(typeof data.range === "number" && imc >= data.range) return data;
        })

    bmiResults.textContent = imc;
    bmiResults.style.color = `${rank.color}`;
    bmiAnalysis.textContent = `${rank.name}`;
    }
