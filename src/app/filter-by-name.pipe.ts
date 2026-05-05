// Import des outils nécessaires pour créer un pipe Angular
import { Pipe, PipeTransform } from '@angular/core';

// Déclaration du pipe
@Pipe({
  name: 'filterByName',   // Nom utilisé dans le HTML
  standalone: true        // Pipe autonome (pas besoin de module)
})
export class FilterByNamePipe implements PipeTransform {

  // Méthode principale du pipe
  transform(products: any[], searchTerm: string): any[] {

    // Si la liste de produits est vide ou non définie
    if (!products) {
      return [];
    }

    // Si aucun terme de recherche n'est saisi (ou uniquement des espaces)
    if (!searchTerm || searchTerm.trim() === '') {
      return products; // On retourne tous les produits
    }

    // Filtrage des produits selon le nom
    return products.filter(product =>
      product.name
        .toLowerCase()              // Mise en minuscule pour éviter les problèmes de casse
        .includes(searchTerm.toLowerCase()) // Vérifie si le nom contient le terme recherché
    );
  }
}