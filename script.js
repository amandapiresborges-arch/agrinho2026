// Lista de dicas sustentáveis
const dicas = [
    "Rotação de Culturas: Alternar as espécies plantadas ajuda a recuperar os nutrientes do solo naturalmente.",
    "Plantio Direto: Cultivar sobre os resíduos da colheita anterior protege o solo contra erosão e mantém a umidade.",
    "Uso de Drones: A tecnologia ajuda a aplicar insumos apenas onde é realmente necessário, reduzindo o desperdício.",
    "Preservação de Matas Ciliares: Manter as árvores em volta de rios e lagos protege as fontes de água da fazenda.",
    "Energia Solar no Campo: Utilizar painéis solares para bombear água e iluminar estruturas reduz a pegada de carbono."
];

// Função para sortear e mostrar uma dica
function mostrarDica() {
    const elementoDica = document.getElementById("texto-dica");
    
    // Escolhe uma dica aleatória da lista
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Atualiza o texto na tela com uma animação simples
    elementoDica.textContent = dicas[indiceAleatorio];
    elementoDica.style.color = "#2e5a1c";
}