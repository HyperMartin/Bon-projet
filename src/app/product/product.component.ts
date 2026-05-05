// Import du décorateur Component (permet de définir un composant Angular)
import { Component } from '@angular/core';

// Module commun Angular (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Permet de récupérer les paramètres de l’URL + gérer les liens
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  // Nom de la balise HTML du composant
  selector: 'app-product',

  // Composant autonome (pas besoin de module Angular)
  standalone: true,

  // Modules nécessaires au template
  imports: [CommonModule, RouterLink],

  // Fichier HTML associé
  templateUrl: './product.component.html',

  // Fichier CSS associé
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // Produit sélectionné (affiché dans la page détail)
  product: any;

  // Liste des produits (données statiques ici)
  products = [
    {
      id: 1,
      name: 'Agécanonix',
      price: 29.99,
      // Construction du chemin de l’image
      image: new URL('./Images-figurines/agecanonix-figurine-4.PNG', import.meta.url).href,
      description: 'Agécanonix est l’un des personnages les plus âgés du village. Cette figurine met en valeur son allure reconnaissable et son esprit bien trempé.'
    },
    {
      id: 2,
      name: 'Astérix',
      price: 34.99,
      image: new URL('./Images-figurines/asterix-figurine-1.PNG', import.meta.url).href,
      description: 'Astérix est le célèbre petit guerrier gaulois. Cette figurine rend hommage à son courage, à sa malice et à son esprit d’aventure.'
    },
    {
      id: 3,
      name: 'César',
      price: 39.99,
      image: new URL('./Images-figurines/cesar-figurine-5.PNG', import.meta.url).href,
      description: 'César représente toute la puissance de Rome. Cette figurine propose une interprétation fidèle et élégante du personnage.'
    },
    {
      id: 4,
      name: 'Cléopâtre',
      price: 37.99,
      image: new URL('./Images-figurines/cleopatre-figurine-6.PNG', import.meta.url).href,
      description: 'Cléopâtre est une figure iconique de l’univers d’Astérix et Obélix. Cette figurine souligne son charisme et son raffinement.'
    },
    {
      id: 5,
      name: 'Idéfix',
      price: 24.99,
      image: new URL('./Images-figurines/idefix-figurine-3.PNG', import.meta.url).href,
      description: 'Idéfix est le fidèle compagnon d’Obélix. Cette figurine adorable met en avant son énergie et son attachement à ses amis.'
    },
    {
      id: 6,
      name: 'Obélix',
      price: 44.99,
      image: new URL('./Images-figurines/obelix-figurine-2.PNG', import.meta.url).href,
      description: 'Obélix est le compagnon inséparable d’Astérix. Cette figurine représente sa force légendaire et son tempérament attachant.'
    }
  ];

  // Injection du service ActivatedRoute pour accéder aux paramètres de l’URL
  constructor(private route: ActivatedRoute) {

    // Récupération de l’ID dans l’URL (ex: /produit/2)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Recherche du produit correspondant à cet ID
    this.product = this.products.find(product => product.id === id);
  }
}