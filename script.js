// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// Navbar Background on Scroll
// ===============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#020617";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    }
    else{
        header.style.background = "rgba(15,23,42,.85)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){
        alert("Please fill all fields.");
        return;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Enter a valid email.");
        return;
    }

    alert("✅ Message Sent Successfully!");

    form.reset();

});


// ===============================
// Animated Statistics Counter
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

    const target = parseInt(counter.innerText);

    let count = 0;

    const updateCounter = ()=>{

        const increment = target / 100;

        if(count < target){

            count += increment;

            counter.innerText = Math.ceil(count)+"+";

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText = target+"+";

        }

    }

    updateCounter();

});


// ===============================
// Fade-in Animation
// ===============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .8s ease";

observer.observe(section);

});