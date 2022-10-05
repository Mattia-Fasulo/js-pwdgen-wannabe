const nomeUtente = prompt('Come ti chiami?')
const cognomeUtente = prompt("Qual'è il tuo cognome?")
const coloreUtente = prompt("qual'è il tuo colore preferito?")
const etàUtente = prompt("quanti anni hai?")

const datiUtente = `
${nomeUtente}
${cognomeUtente}
${coloreUtente}
${etàUtente}
`



document.getElementById("my-h1").innerHTML = datiUtente