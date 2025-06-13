// add btn to open the form
const add = document.getElementById('add');
add.addEventListener('click',()=>{
    const form =  document.getElementById('form');
    form.style.display = "flex";

    if( form.style.display = "flex"){
        const closeBtn = document.getElementById('close-btn');
        closeBtn.addEventListener('click',()=>{
form.style.display = "none";
form.style.cursor = "pointer";

        });
    }
});