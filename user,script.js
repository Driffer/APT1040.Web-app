
function contactForm(){
    document.getElementById("qontact").innerHTML=getElementById("qontactForm");//innerHTML=forms["qontactForm"];
}//document.getElementById("qontact").appendChild(button)+goBack();//+qontactForm


function hideit() {
document.getElementById("contact").style.display='none'
}
/*function Hide() {
    document.getElementsByTagName("section").style.display='none'
    }
function navigation{
    const routes = [
        { path: '/', name: 'Home', component: Home },
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/explore', name: 'Explore', component: Explore },
       
      ];
}
    */
function Toggle(){
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    // ...
  ];
  
const flashcard = document.getElementById("flashcard-container");
const flashcardFront = document.getElementById("flashcard-front");
const flashcardBack = document.getElementById("flashcard-back");

flashcard.addEventListener("click", () => {
  flashcardFront.style.display === "block"
    ? (flashcardFront.style.display = "none", flashcardBack.style.display = "block")
    : (flashcardFront.style.display = "block", flashcardBack.style.display = "none");
})
} 
function goBack() {
window.history.back()
}
   