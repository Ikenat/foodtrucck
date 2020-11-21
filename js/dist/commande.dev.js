"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var tab_menu_pokebowl = [Product1 = new Produit('PokeBowl', 'Poke Bowl au saumon :', './images/image_commande/PokeBowl_saumon.jpg', ['riz', 'Saumon cru', 'Avocat', 'Sauce soja'], 0, 5.30), Product2 = new Produit('PokeBowl', 'Poke Bowl au thon :', './images/image_commande/PokeBowl_thon.jpg', ['Riz', 'Tomate', 'Oignons rouge', 'Avocat', 'Thon'], 0, 5.30), Product3 = new Produit('PokeBowl', 'Poke Bowl au poulet :', './images/image_commande/PokeBowl_poulet.png', ['Cacahuètes', 'Salade', 'Sauce teriyaki', 'Sésame', 'Edamame', 'Poulet'], 1, 5.30), Product4 = new Produit('PokeBowl', 'Poke Bowl au veggie :', './images/image_commande/Pokebowl_veggie.jpg', ['Avocat', 'Edamame', 'Légume croquant', 'Sauce soja'], 0, 5.30)]; //tableau de tout les wrap avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_wrap = [Product5 = new Produit('Wrap', 'Wrap au boeuf :', './images/image_commande/Wrap_boeuf.jpg', ['Steak haché', 'Cheddar fondu', 'Bacon grillé', 'Salade', 'Oignons fris', 'Sauce maison'], 0, 5.30), Product6 = new Produit('Wrap', 'Wrap au poulet :', './images/image_commande/Wrap_poulet.jpg', ['Sauce philadelphia', 'Mozarella', 'Poulet', 'Tartare de tomates', 'Oignons frits'], 0, 5.30), Product7 = new Produit('Wrap', 'Wrap veggie :', './images/image_commande/Wrap_veggie.jpeg', ['Carottes râpé', 'chou râpé', 'Concombre', 'Laitue', 'Radis rose', 'Mayonaise'], 0, 5.30)]; //tableau de tout les ramens avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_ramen = [Product8 = new Produit('Ramen', 'Ramen au boeuf :', './images/image_commande/Ramen_boeuf.jpeg', ['Steack de boeuf', 'Chou', 'Echalottes', 'Oignons nouveaux', 'Sauce soja', 'Sauce yakitori', 'Bouillon de volaille', 'Gingembre', 'Nouilles maison'], 0, 5.30), Product9 = new Produit('Wrap', 'Ramen au poulet :', './images/image_commande/Ramen_poulet.jpeg', ['Nouilles maison', 'Filets de poulet', 'Oignons nouveaux', 'Oeuf', 'Bouillon de volailles', 'Sauce maison', 'Fromage blanc', 'Tabasco'], 0, 5.30)]; //tableau de tout les desserts avec leur ingrédient, le nom du plat, l'image, la quantité et le prix

var tab_menu_dessert = [Product10 = new Produit('Dessert', 'Hawaïen:', './images/image_commande/dessert_hawaïen.jpg', ['Cheesecake au lilikoi', 'Salade de fruit à l\'hawaïennes'], 0, 5.30), Product11 = new Produit('Dessert', 'Américain:', './images/image_commande/dessert_americain.jpg', ['Cake healthy', 'Carotte cake', 'Cheese Cake:pumpkin & pecan pie'], 0, 5.30), Product12 = new Produit('Dessert', 'Japonais:', './images/image_commande/dessert_japonais.jpg', ['Brochette de mochi'], 0, 5.30)];

if (pokebowl != null && wrap != null && ramen != null && dessert != null) {
  //parcours les tableau et organise la div du produit avec toute les info neccesaire
  tab_menu_pokebowl.forEach(function (element, index) {
    var ingredient = "";
    element.ingredient.forEach(function (element) {
      ingredient += '<p>' + element + '</p>';
    });
    pokebowl.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="1"  class="bouton" >Ajoutez au panier</button></div></div>';
  });
  tab_menu_ramen.forEach(function (element) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var ingredient = "";
    element.ingredient.forEach(function (element) {
      ingredient += '<p>' + element + '</p>';
    });
    ramen.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="3"  class="bouton">Ajoutez au panier</button></div></div>';
  });
  tab_menu_wrap.forEach(function (element, index) {
    var ingredient = "";
    element.ingredient.forEach(function (element) {
      ingredient += '<p>' + element + '</p>';
    });
    wrap.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="4"  class="bouton">Ajoutez au panier</button></div></div>';
  });
  tab_menu_dessert.forEach(function (element, index) {
    var ingredient = "";
    element.ingredient.forEach(function (element) {
      ingredient += '<p>' + element + '</p>';
    });
    dessert.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient + '</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="5" >Ajoutez au panier</button></div></div>';
  });
} //ajoute pour chaque bouton un onclick


var bouton = document.querySelectorAll('.bouton');
console.log(bouton);

var _loop = function _loop(i) {
  bouton[i].addEventListener('click', function () {
    switch (i) {
      case 0:
        PanierItem(tab_menu_pokebowl[i]);
        Cost(tab_menu_pokebowl[i]);
        break;

      case 1:
        PanierItem(tab_menu_pokebowl[i]);
        Cost(tab_menu_pokebowl[i]);
        break;

      case 2:
        PanierItem(tab_menu_pokebowl[i]);
        Cost(tab_menu_pokebowl[i]);
        break;

      case 3:
        PanierItem(tab_menu_pokebowl[i]);
        Cost(tab_menu_pokebowl[i]);
        break;

      case 4:
        PanierItem(tab_menu_wrap[i - 4]);
        Cost(tab_menu_wrap[i - 4]);
        break;

      case 5:
        PanierItem(tab_menu_wrap[i - 4]);
        Cost(tab_menu_wrap[i - 4]);
        break;

      case 6:
        PanierItem(tab_menu_wrap[i - 4]);
        Cost(tab_menu_wrap[i - 4]);
        break;

      case 7:
        PanierItem(tab_menu_ramen[i - 7]);
        Cost(tab_menu_wrap[i - 7]);
        break;

      case 8:
        PanierItem(tab_menu_ramen[i - 7]);
        Cost(tab_menu_wrap[i - 7]);
        break;

      case 9:
        PanierItem(tab_menu_dessert[i - 9]);
        Cost(tab_menu_wrap[i - 9]);
        break;

      case 10:
        PanierItem(tab_menu_dessert[i - 9]);
        Cost(tab_menu_wrap[i - 9]);
        break;

      case 11:
        PanierItem(tab_menu_dessert[i - 9]);
        Cost(tab_menu_wrap[i - 9]);
        break;
    }
  });
};

for (var i = 0; i < bouton.length; i++) {
  _loop(i);
} //ajoute la notif d'item dans le panier au chargement de la page


function onloadItemPanier() {
  var productNumbers = localStorage.getItem('cartsNumbers');

  if (productNumbers) {
    //change le nombre de produit sur la notif
    document.querySelector('.cartitem').textContent = productNumbers;
  }
} //enregistre dans le stockage local le nombre d'item


function PanierItem(product) {
  //met le nombre de produit dans le stockage local
  var productNumbers = localStorage.getItem('TotalQuantite'); //convertis le nombre en int 

  productNumbers = parseInt(productNumbers); //regarde s'il existe un produit dans le panier, si oui rajoute 

  if (productNumbers) {
    localStorage.setItem('TotalQuantite', productNumbers + 1);
    document.querySelector('.cartitem').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('TotalQuantite', 1);
    document.querySelector('.cartitem').textContent = 1;
  }

  SetQuantite(product);
}

function SetQuantite(product) {
  //recupere la quantite dans le stockage local
  var panier = localStorage.getItem('ProductInCart'); //transforme le format json en object js 

  panier = JSON.parse(panier); //regarde si le panier est vide ou non

  if (panier != null) {
    //si le produit n'est pas encore dans le panier => le rajoute 
    if (panier[product.produit] == undefined) {
      panier = _objectSpread({}, panier, _defineProperty({}, product.produit, product));
    } //ajoute 1 quantite au produit


    panier[product.produit].quantite += 1;
  } else {
    //ajoute le nouveau produit
    product.quantite = 1;
    panier = _defineProperty({}, product.produit, product);
  } //met le panier dans le stockage local


  localStorage.setItem("ProductInCart", JSON.stringify(panier));
  console.log(panier);
}

function Cost(product) {
  var TotalPrice = localStorage.getItem('TotalPrice');

  if (TotalPrice != null || TotalPrice != undefined) {
    TotalPrice = parseInt(TotalPrice);
    localStorage.setItem("TotalPrice", TotalPrice + product.prix);
  } else {
    localStorage.setItem("TotalPrice", product.prix);
  }
}

function AffichagePanier() {
  //recupère les produit dans le panier
  var ProductPanier = localStorage.getItem("ProductInCart");
  ProductPanier = JSON.parse(ProductPanier);
  var PanierContainer = document.querySelector(".product-container");
  var totalCostdiv = document.querySelector(".totalprice");
  var totalCost = 0;

  if (ProductPanier == null || ProductPanier == undefined) {
    PanierContainer.innerHTML = "\n        <div class=\"vide\">\n            <p> Votre panier et vide </p>\n        </div>\n        ";
    totalCostdiv.innerHTML = '<p>Total: 0€</p>';
  } //regarde si il y a des chose dans le panier et si le div paniercontainer existe pour run que sur la page d'achat


  if (ProductPanier && PanierContainer) {
    //vide la div des produit
    PanierContainer.innerHTML = ''; //boucle sur tout les produit dans le panier

    Object.values(ProductPanier).map(function (element) {
      var ingredient = "";
      element.ingredient.forEach(function (element) {
        ingredient += '<p>' + element + '</p>';
      });
      totalCost += element.prix * element.quantite;
      PanierContainer.innerHTML += "\n            <div class=\"product\">\n                <div class=\"information_wrapper\">\n                    <div class=\"img\">\n                        <img src=\"  ".concat(element.img, "  \" alt= ui>\n                    </div>\n                    <div class=\"text\">\n                        <div class=\"product-info\">\n                            <span> ").concat(element.quantite, " </span>\n                            <h2> ").concat(element.produit, "  </h2>\n                        </div>\n                        <p> ").concat(ingredient, " </p>\n                    </div>\n                </div>\n                <div class=\"modif\">\n                    <p class=\"plus\" onclick=\"addQuantity()\">+</p>\n                    <p class=\"suppr\" onclick=\"supprProduct()\">X</p>\n                </div>\n            </div>\n            ");
    });
    PanierContainer.innerHTML += "\n        <div class=\"totalprice bottom\">\n            <p>Total: ".concat(totalCost, " \u20AC</p>\n        </div>\n        ");
    totalCostdiv.innerHTML += " <p>Total: ".concat(totalCost, " \u20AC</p> ");
  }
}

function addQuantity() {}

function suppr() {
  localStorage.clear();
  AffichagePanier();
} //reste à faire le design + calcul de prix + fonction suppr;


onloadItemPanier();
AffichagePanier();