 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (newTitle) {
    const h1 = document.querySelector("h1");
    h1.innerText = newTitle;
}
    
 changeTitle("Manipolazione del DOM")



      /* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function (newClass) {
    const titleElement = document.querySelector("h1");
    titleElement.classList.add(newClass)
}
          

addClassToTitle("myHeading")

      /* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (newText) {
    const paragrafi = document.querySelectorAll("div>p");
    paragrafi.forEach(function (element) {
        element.innerText = newText;  
    })
}

changePcontent("Questo è il nuovo testo")


      /* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function (newHref) {
    const links = document.querySelectorAll("div>a");
    links.forEach(function (el) {
        el.href = newHref;
    });
}

changeUrls("https://www.google.com")


      /* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function (newItem) {
    let ul = document.getElementById("secondList");
    let li = document.createElement("li");
    li.textContent = newItem;
        ul.appendChild(li)  
    }
    

addToTheSecond("4th")


      /* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function (nuovoP) {
    const div = document.querySelector("body>div")
    const newParagraph = document.createElement("p");
    newParagraph.textContent = nuovoP
    div.appendChild(newParagraph);
}
    
 addParagraph("nuovo paragrafo")

          
      

      /* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
    const ul = document.querySelector("div>ul");
  ul.style.display = "none"
}
      
hideFirstUl()

      /* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
    const background = document.querySelectorAll("ul");
    background.forEach(function (background) {
        background.style.backgroundColor="green"
    })
}

paintItGreen()


      /* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
       const cancel = document.querySelector("h1");
    cancel.addEventListener('click', function () {
        const newH1 = cancel.textContent;
  cancel.textContent = newH1.slice(0, -1);
});   
}
      
makeItClickable()

      /* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

      const revealFooterLink = function () {}

      /* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

      const generateTable = function () {}

      /* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

      const addRow = function () {}

      /* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

      const hideAllImages = function () {}

      /* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

      const changeColorWithRandom = function () {}