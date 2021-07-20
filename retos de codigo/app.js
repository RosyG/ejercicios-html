let key = {
    uno: "ejemplo más largo semi dinámico",
    dos: "ejemplo más corto dinámico"
}
switch (key.uno) {
    case "ejemplo más largo semi dinámico":
        const container = document.getElementById("container");
        for (let tabla = 1; tabla <= 10; tabla++) {
            let resultado = 0;
            const lista = document.createElement("ol");
            let texto = "";
            for (let i = 1; i <= 10; i++) {
                resultado = tabla*i;
                texto += "<li>"+ tabla + "x" + i + "=" + resultado + "</li>";
                // const node = document.createTextNode(texto);
                // para.appendChild(lista);
            }
            console.log('texto::', texto);
            lista.innerHTML = texto;
            // para.appendChild(lista);
            container.appendChild(lista);
        }


        break;

        case "ejemplo más corto dinámico":
        
        break;

    default:
        break;
}