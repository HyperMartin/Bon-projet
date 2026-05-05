// Import des outils nécessaires pour créer un pipe Angular
import { Pipe, PipeTransform } from '@angular/core';

// Déclaration du pipe
@Pipe({
  name: 'sortByPrice',   // Nom utilisé dans le HTML
  standalone: true       // Pipe autonome (pas besoin de module)
})
export class SortByPricePipe implements PipeTransform {

  // Méthode principale du pipe
  transform(products: any[], order: string): any[] {

    // Si la liste est vide ou si aucun ordre n'est défini
    if (!products || !order) {
      return products; // On retourne la liste telle quelle
    }

    // Création d'une copie du tableau pour éviter de modifier l'original
    const sortedProducts = [...products];

    // Tri par prix croissant
    if (order === 'asc') {
      return sortedProducts.sort((a, b) => a.price - b.price);
    }

    // Tri par prix décroissant
    if (order === 'desc') {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Si l'ordre n'est pas reconnu, on retourne la liste originale
    return products;
  }
}