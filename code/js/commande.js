

class Produit {
    constructor(categorie, produit, img, ingredient, quantite, prix) {
        this.categorie = categorie;
        this.produit = produit;
        this.img = img;
        this.ingredient = ingredient;
        this.quantite = quantite;
        this.prix = prix;
    };
}

let panier_product = [];
//cible les div pour chaque catégorie de produit
const pokebowl = document.getElementById('PokeBowl');
const wrap = document.getElementById('Wrap');
const ramen = document.getElementById('Ramen');
const dessert = document.getElementById('Dessert');

//tableau de toute les pokebowls avec leur ingrédient, le nom du plat, l'image, la quantité et le prix
let tab_menu_pokebowl = [
    Product1 = new Produit('PokeBowl','Poke Bowl au saumon :','./images/image_commande/PokeBowl_saumon.jpg', ['riz', 'Saumon cru', 'Avocat', 'Sauce soja'], 0, 5.30),
    Product2 = new Produit('PokeBowl','Poke Bowl au thon :','./images/image_commande/PokeBowl_thon.jpg', ['Riz', 'Tomate', 'Oignons rouge', 'Avocat', 'Thon'], 0, 5.30),
    Product3 = new Produit('PokeBowl','Poke Bowl au poulet :','./images/image_commande/PokeBowl_poulet.png', ['Cacahuètes', 'Salade', 'Sauce teriyaki', 'Sésame', 'Edamame', 'Poulet'], 1, 5.30),
    Product4 = new Produit('PokeBowl','Poke Bowl au veggie :','./images/image_commande/Pokebowl_veggie.jpg', ['Avocat', 'Edamame', 'Légume croquant', 'Sauce soja'], 0, 5.30),
    ];

    //tableau de tout les wrap avec leur ingrédient, le nom du plat, l'image, la quantité et le prix
let tab_menu_wrap = [
    Product5 = new Produit('Wrap','Wrap au boeuf :','./images/image_commande/Wrap_boeuf.jpg', ['Steak haché', 'Cheddar fondu', 'Bacon grillé', 'Salade', 'Oignons fris', 'Sauce maison'], 0, 5.30),
    Product6 = new Produit('Wrap','Wrap au poulet :','./images/image_commande/Wrap_poulet.jpg', ['Sauce philadelphia', 'Mozarella', 'Poulet', 'Tartare de tomates', 'Oignons frits'], 0, 5.30),
    Product7 = new Produit('Wrap','Wrap veggie :','./images/image_commande/Wrap_veggie.jpeg', ['Carottes râpé', 'chou râpé', 'Concombre', 'Laitue', 'Radis rose', 'Mayonaise'], 0, 5.30),
    ];

//tableau de tout les ramens avec leur ingrédient, le nom du plat, l'image, la quantité et le prix
let tab_menu_ramen = [
    Product8 = new Produit('Ramen','Ramen au boeuf :','./images/image_commande/Ramen_boeuf.jpeg', ['Steack de boeuf', 'Chou', 'Echalottes', 'Oignons nouveaux', 'Sauce soja', 'Sauce yakitori', 'Bouillon de volaille', 'Gingembre', 'Nouilles maison'], 0, 5.30),
    Product9 = new Produit('Wrap','Ramen au poulet :','./images/image_commande/Ramen_poulet.jpeg', ['Nouilles maison', 'Filets de poulet', 'Oignons nouveaux', 'Oeuf', 'Bouillon de volailles', 'Sauce maison', 'Fromage blanc', 'Tabasco'], 0, 5.30),
];

//tableau de tout les desserts avec leur ingrédient, le nom du plat, l'image, la quantité et le prix
let tab_menu_dessert = [
        Product10 = new Produit('Dessert', 'Hawaïen:', './images/image_commande/dessert_hawaïen.jpg', ['Cheesecake au lilikoi', 'Salade de fruit à l\'hawaïennes'], 0, 5.30),
        Product11 = new Produit('Dessert', 'Américain:', './images/image_commande/dessert_americain.jpg', ['Cake healthy', 'Carotte cake', 'Cheese Cake:pumpkin & pecan pie'], 0, 5.30),
        Product12 = new Produit('Dessert', 'Japonais:', './images/image_commande/dessert_japonais.jpg', ['Brochette de mochi'], 0, 5.30),
];

if (pokebowl != null && wrap != null && ramen != null && dessert != null) {
    //parcours les tableau et organise la div du produit avec toute les info neccesaire
    tab_menu_pokebowl.forEach((element, index) => {
        let ingredient = "";
        element.ingredient.forEach(element => {
            ingredient += '<p>' + element + '</p>';
        });
        pokebowl.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient +'</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="1"  class="bouton" >Ajoutez au panier</button></div></div>';
    });

    tab_menu_ramen.forEach((element, index = 4) => {
        let ingredient = "";
        element.ingredient.forEach(element => {
            ingredient += '<p>' + element + '</p>';
        });
        ramen.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient +'</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="3"  class="bouton">Ajoutez au panier</button></div></div>';
    });


    tab_menu_wrap.forEach((element, index) => {
        let ingredient = "";
        element.ingredient.forEach(element => {
            ingredient += '<p>' + element + '</p>';
        });
        wrap.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient +'</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="4"  class="bouton">Ajoutez au panier</button></div></div>';
    });

    tab_menu_dessert.forEach((element, index) => {
        let ingredient = "";
        element.ingredient.forEach(element => {
            ingredient += '<p>' + element + '</p>';
        });
        dessert.innerHTML += '<div class="product"><div class="information_wrapper"><div class="img"><img src="' + element.img + '" alt= ui></div><div class="text"><h2>' + element.produit + '</h2><p>' + ingredient +'</p></div></div><div class="panier"><p>' + element.prix + ' € </p><button type="button" value="5" >Ajoutez au panier</button></div></div>';
    });
}


function getValue(valeur)  {
    valeur = 2;
}



//ajoute pour chaque bouton un onclick
let bouton = document.querySelectorAll('.bouton');
console.log(bouton);
for (let i = 0; i < bouton.length; i++) {
    bouton[i].addEventListener('click', () => {
        switch (i) {
            case 0 :
                PanierItem(tab_menu_pokebowl[i])
                Cost(tab_menu_pokebowl[i])
                break;
            case 1 :
                PanierItem(tab_menu_pokebowl[i])
                Cost(tab_menu_pokebowl[i])
                break;
            case 2 :
                PanierItem(tab_menu_pokebowl[i])
                Cost(tab_menu_pokebowl[i])
                break;
            case 3 :
                PanierItem(tab_menu_pokebowl[i])
                Cost(tab_menu_pokebowl[i])
                break;
            case 4 :
                PanierItem(tab_menu_wrap[i - 4])
                Cost(tab_menu_wrap[i - 4])
                break;
            case 5 :
                PanierItem(tab_menu_wrap[i - 4])
                Cost(tab_menu_wrap[i - 4])
                break;
            case 6 :
                PanierItem(tab_menu_wrap[i - 4])
                Cost(tab_menu_wrap[i - 4])
                break;
            case 7 :
                PanierItem(tab_menu_ramen[i - 7])
                Cost(tab_menu_wrap[i - 7])
                break;
            case 8 :
                PanierItem(tab_menu_ramen[i - 7])
                Cost(tab_menu_wrap[i - 7])
                break;
            case 9 :
                PanierItem(tab_menu_dessert[i - 9])
                Cost(tab_menu_wrap[i - 9])
                break;
            case 10 :
                PanierItem(tab_menu_dessert[i - 9])
                Cost(tab_menu_wrap[i - 9])
                break;
            case 11 :
                PanierItem(tab_menu_dessert[i - 9])
                Cost(tab_menu_wrap[i - 9])
                break;
        }
    })
}

//ajoute la notif d'item dans le panier au chargement de la page
function onloadItemPanier () {
    let productNumbers = localStorage.getItem('cartsNumbers');

    if(productNumbers) {
        //change le nombre de produit sur la notif
        document.querySelector('.cartitem').textContent = productNumbers;
    }
}

//enregistre dans le stockage local le nombre d'item
function PanierItem(product) {
    //met le nombre de produit dans le stockage local
    let productNumbers = localStorage.getItem('TotalQuantite');

        //convertis le nombre en int 
    productNumbers = parseInt(productNumbers);

        //regarde s'il existe un produit dans le panier, si oui rajoute 
    if ( productNumbers ) {
        localStorage.setItem('TotalQuantite', productNumbers + 1);
        document.querySelector('.cartitem').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('TotalQuantite', 1);
        document.querySelector('.cartitem').textContent = 1;
    }

    SetQuantite(product);
}

function SetQuantite(product) {
    //recupere la quantite dans le stockage local
    let panier = localStorage.getItem('ProductInCart');
    //transforme le format json en object js 
    panier = JSON.parse(panier);

    //regarde si le panier est vide ou non
    if(panier != null) {
        //si le produit n'est pas encore dans le panier => le rajoute 
        if (panier[product.produit] == undefined) {
            panier = {
                ...panier,
                [product.produit]: product
            }
        }
        //ajoute 1 quantite au produit
        panier[product.produit].quantite += 1;
    } else {
        //ajoute le nouveau produit
        product.quantite = 1
        panier = {
            [product.produit]: product
        }
    
    }

    //met le panier dans le stockage local
    localStorage.setItem("ProductInCart", JSON.stringify(panier));
    console.log(panier);
}


function Cost(product) {
    let TotalPrice = localStorage.getItem('TotalPrice');
    if(TotalPrice != null || TotalPrice != undefined) {
        TotalPrice = parseInt(TotalPrice);
        localStorage.setItem("TotalPrice", TotalPrice + product.prix);
    } else {
        localStorage.setItem("TotalPrice", product.prix);
    }
}

function AffichagePanier() {
    //recupère les produit dans le panier
    let ProductPanier = localStorage.getItem("ProductInCart");
    ProductPanier = JSON.parse(ProductPanier);
    let PanierContainer = document.querySelector(".product-container");
    let totalCostdiv = document.querySelector(".totalprice");
    let totalCost = 0 ;
    if(ProductPanier == null || ProductPanier == undefined) {
        PanierContainer.innerHTML = `
        <div class="vide">
            <p> Votre panier et vide </p>
        </div>
        `;
        totalCostdiv.innerHTML = '<p>Total: 0€</p>';
    }
    //regarde si il y a des chose dans le panier et si le div paniercontainer existe pour run que sur la page d'achat
    if(ProductPanier && PanierContainer) {
        //vide la div des produit
        PanierContainer.innerHTML = '';
        //boucle sur tout les produit dans le panier
        Object.values(ProductPanier).map(element => {
            let ingredient = "";
            element.ingredient.forEach(element => {
                ingredient += '<p>' + element + '</p>';
            });
            totalCost += element.prix * element.quantite;
            PanierContainer.innerHTML += `
            <div class="product">
                <div class="information_wrapper">
                    <div class="img">
                        <img src="  ${element.img}  " alt= ui>
                    </div>
                    <div class="text">
                        <div class="product-info">
                            <span> ${element.quantite} </span>
                            <h2> ${element.produit}  </h2>
                        </div>
                        <p> ${ingredient} </p>
                    </div>
                </div>
                <div class="modif">
                    <p class="plus">+</p>
                    <p class="suppr">X</p>
                </div>
            </div>
            `
        }); 
        PanierContainer.innerHTML += `
        <div class="totalprice bottom">
            <p>Total: ${totalCost} €</p>
        </div>
        `;
        totalCostdiv.innerHTML += ` <p>Total: ${totalCost} €</p> `;
    }
}

function suppr() {
    localStorage.clear();
    AffichagePanier();
}

//reste à faire le design + calcul de prix + fonction suppr;
onloadItemPanier();
AffichagePanier();