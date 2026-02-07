const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');

// Funkcja przenosząca na drugą stronę
btnYes.addEventListener('click', () => {
    page1.classList.add('hidden'); // Ukryj stronę 1
    page2.classList.remove('hidden'); // Pokaż stronę 2
    
    // Opcjonalnie: zmień tło jeśli masz plik 'tlo serduszka druga stroba.svg'
    // document.body.style.backgroundImage = "url('img/tlo serduszka druga stroba.svg')";
});

// Funkcja uciekającego przycisku
// Działa na najechanie myszką (desktop) i dotknięcie (mobile)
const moveButton = () => {
    // Pobierz wymiary okna przeglądarki
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Pobierz wymiary przycisku
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Oblicz nową losową pozycję (z marginesem, żeby nie uciekł poza ekran)
    // Random from 0 to (Screen Width - Button Width)
    const newX = Math.random() * (width - btnWidth - 40) + 20; 
    const newY = Math.random() * (height - btnHeight - 40) + 20;

    // Ustaw pozycję absolute (wyjmuje przycisk z układu panelu)
    btnNo.style.position = 'fixed'; // Używamy fixed, żeby latał po całym ekranie
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;
};

btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton); // Obsługa dotyku na telefonie