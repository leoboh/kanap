/// Récuperer l'orderId
// recuperer l'url
let recupUrl = window.location.search;

// recuperer l'id dans l'url
let recupId = new URLSearchParams(recupUrl);
let idUrl = recupId.get("id");

// Transmettre les infos au DOM
let htmlSpanCommande = document.getElementById("orderId");
htmlSpanCommande.textContent = idUrl;

// Supprimer les infos dans le localStorage
localStorage.clear();
