// Import du décorateur Component depuis Angular
import { Component } from '@angular/core';

// Import du module pour gérer les formulaires (ngModel)
import { FormsModule } from '@angular/forms';

// Import du Router pour la navigation + RouterLink pour les liens dans le HTML
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',

  // Indique que ce composant est autonome (standalone, sans module Angular classique)
  standalone: true,

  // Modules nécessaires au fonctionnement du composant
  imports: [RouterLink, FormsModule],

  // Fichier HTML associé au composant
  templateUrl: './header.component.html',

  // Fichier CSS associé au composant
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  // Variable liée au champ de recherche (ngModel dans le HTML)
  searchTerm: string = '';

  // Injection du service Router pour permettre la navigation entre pages
  constructor(private router: Router) {}

  // Méthode appelée lors de la soumission du formulaire
  onSearch(): void {

    // Navigation vers la page d'accueil avec un paramètre de requête
    this.router.navigate(['/'], {
      queryParams: { search: this.searchTerm }
    });

  }
}