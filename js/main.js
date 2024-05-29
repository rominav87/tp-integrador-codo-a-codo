const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

const { createApp } = Vue
createApp({
    data() {
        return {
            url: "https://api.sampleapis.com/coffee/hot",
            datos: [],
            error: false,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        console.log(data)
                        this.datos = data
                    }
                )
                .catch(error => {
                    console.log("Error:" + error)
                    this.error = true
                });
        }
    },
    created() {  // created() se ejecuta cada vez que se crea el objeto VUE
        this.fetchData(this.url)
    }
}).mount('#app')