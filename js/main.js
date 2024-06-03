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
            // title: [],
            // ingredients:[],
            title: "ALL",
            ingredients: "ALL"
        }
    },
    methods: {
        fetchData() {
            fetch(this.url)
                .then(response => response.json())
                .then(
                    data => {
                        console.log(data)
                        this.datos = data
                        this.title = data
                        this.ingredients = data
                    }
                )
                .catch(error => {
                    console.log("Error:" + error)
                    this.error = true
                });
        }
    },

    filtro() {
        this.datos = this.data.filter(elemento=>(elemento.title==this.title || this.title==="ALL") && (elemento.ingredients==this.ingredients || this.ingredients==="ALL"))
    },
    created() {  // created() se ejecuta cada vez que se crea el objeto VUE
        this.fetchData()
    }
}).mount('#app')