"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Produit = function Produit(categorie, produit, img, ingredient, quantite, prix) {
  _classCallCheck(this, Produit);

  this.categorie = categorie;
  this.produit = produit;
  this.img = img;
  this.ingredient = ingredient;
  this.quantite = quantite;
  this.prix = prix;
};

var panier_product = []; //cible les div pour chaque catégorie de produit

var pokebowl = document.getElementById('PokeBowl');
var wrap = document.getElementById('Wrap');
var ramen = document.getElementById('Ramen');
var dessert = document.getElementById('Dessert'); //tableau de toute les pokebowls avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_pokebowl = [Product1 = new Produit('PokeBowl', 'Poke Bowl au saumon :', './images/image_commande/PokeBowl_saumon.jpg', ['riz', 'Saumon cru', 'Avocat', 'Sauce soja'], 1, 5.30), Product2 = new Produit('PokeBowl', 'Poke Bowl au thon :', './images/image_commande/PokeBowl_thon.jpg', ['Riz', 'Tomate', 'Oignons rouge', 'Avocat', 'Thon'], 1, 5.30), Product3 = new Produit('PokeBowl', 'Poke Bowl au poulet :', './images/image_commande/PokeBowl_poulet.png', ['Cacahuètes', 'Salade', 'Sauce teriyaki', 'Sésame', 'Edamame', 'Poulet'], 1, 5.30), Product4 = new Produit('PokeBowl', 'Poke Bowl au veggie :', './images/image_commande/Pokebowl_veggie.jpg', ['Avocat', 'Edamame', 'Légume croquant', 'Sauce soja'], 1, 5.30)]; //tableau de tout les wrap avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_wrap = [Product5 = new Produit('Wrap', 'Wrap au boeuf :', './images/image_commande/Wrap_boeuf.jpg', ['Steak haché', 'Cheddar fondu', 'Bacon grillé', 'Salade', 'Oignons fris', 'Sauce maison'], 1, 5.30), Product6 = new Produit('Wrap', 'Wrap au poulet :', './images/image_commande/Wrap_poulet.jpg', ['Sauce philadelphia', 'Mozarella', 'Poulet', 'Tartare de tomates', 'Oignons frits'], 1, 5.30), Product7 = new Produit('Wrap', 'Wrap veggie :', './images/image_commande/Wrap_veggie.jpeg', ['Carottes râpé', 'chou râpé', 'Concombre', 'Laitue', 'Radis rose', 'Mayonaise'], 1, 5.30)]; //tableau de tout les ramens avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_ramen = [Product8 = new Produit('Ramen', 'Ramen au boeuf :', './images/image_commande/Ramen_boeuf.jpeg', ['Steack de boeuf', 'Chou', 'Echalottes', 'Oignons nouveaux', 'Sauce soja', 'Sauce yakitori', 'Bouillon de volaille', 'Gingembre', 'Nouilles maison'], 1, 5.30), Product9 = new Produit('Wrap', 'Ramen au poulet :', './images/image_commande/Ramen_poulet.jpeg', ['Nouilles maison', 'Filets de poulet', 'Oignons nouveaux', 'Oeuf', 'Bouillon de volailles', 'Sauce maison', 'Fromage blanc', 'Tabasco'], 1, 5.30)]; //tableau de tout les desserts avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_dessert = [Product10 = new Produit('Dessert', 'Hawaïen:', './images/image_commande/dessert_hawaïen.jpg', ['Cheesecake au lilikoi', 'Salade de fruit à l\'hawaïennes'], 1, 5.30), Product11 = new Produit('Dessert', 'Américain:', './images/image_commande/dessert_americain.jpg', ['Cake healthy', 'Carotte cake', 'Cheese Cake:pumpkin & pecan pie'], 1, 5.30), Product12 = new Produit('Dessert', 'Japonais:', './images/image_commande/dessert_japonais.jpg', ['Brochette de mochi'], 1, 5.30)]; //parcours les tableau et organise la div du produit avec toute les info neccesaire

tab_menu_pokebowl.forEach(function (element, index) {
  var ingredient = "";
  element.ingredient.forEach(function (element) {
    ingredient += '<p>' + element + '</p>';
  });
  pokebowl.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="1"  onclick="getValue(' + (index + 1) + ')">Ajoutez au panier</button></div></div>';
});
tab_menu_ramen.forEach(function (element) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var ingredient = "";
  element.ingredient.forEach(function (element) {
    ingredient += '<p>' + element + '</p>';
  });
  ramen.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="3"  onclick="getValue(' + (index + tab_menu_pokebowl.length + tab_menu_wrap.length + 1) + ')">Ajoutez au panier</button></div></div>';
});
tab_menu_wrap.forEach(function (element, index) {
  var ingredient = "";
  element.ingredient.forEach(function (element) {
    ingredient += '<p>' + element + '</p>';
  });
  wrap.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="4"  onclick="getValue(' + (index + tab_menu_pokebowl.length + 1) + ')">Ajoutez au panier</button></div></div>';
});
tab_menu_dessert.forEach(function (element, index) {
  var ingredient = "";
  element.ingredient.forEach(function (element) {
    ingredient += '<p>' + element + '</p>';
  });
  dessert.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="5"  onclick="getValue(' + (index + tab_menu_pokebowl.length + tab_menu_wrap.length + tab_menu_ramen.length + 1) + ')">Ajoutez au panier</button></div></div>';
}); // recupere la valeur du produit qu'on veut ajouter au panier

function getValue(valeur) {
  panier_product.push(eval('Product' + valeur));
}

;