const startGomb = document.getElementById('startGomb');
const reflexGomb = document.getElementById('reflexGomb');
const eredmenyBekezdes = document.getElementById('eredmenyBekezdes');



startGomb.addEventListener('click', () => {
    const random = Math.random() * 5 + 5;
    let kattido = undefined;

    const reflexTimeout = setTimeout(() => {
        document.body.style.backgroundColor = 'green';
        const reflexTimeout = new Date();
    }, random * 1000)});

reflexGomb.addEventListener('click', () => {
    if (kattido === undefined) {
        eredmenyBekezdes.textContent = 'túl korán kattintottál!';
        clearTimeout(reflexTimeout);
    }
    else
    {
        const elteltido = new Date();
        eredmeny.textContent = "idő: " + (elteltido - kattido) / 1000 + " másodperc";
    }
});