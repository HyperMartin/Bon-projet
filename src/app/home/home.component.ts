import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SortByPricePipe, FilterByNamePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sortOrder: string = '';
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
    });
  }

  products = [
    {
      id: 1,
      name: 'Agécanonix',
      price: 29.99,
      image: new URL('./Images-figurines/agecanonix-figurine-4.PNG', import.meta.url).href,
      description: 'Figurine inspirée d’Agécanonix.'
    },
    {
      id: 2,
      name: 'Astérix',
      price: 34.99,
      image: new URL('./Images-figurines/asterix-figurine-1.PNG', import.meta.url).href,
      description: 'Figurine inspirée d’Astérix.'
    },
    {
      id: 3,
      name: 'César',
      price: 39.99,
      image: new URL('./Images-figurines/cesar-figurine-5.PNG', import.meta.url).href,
      description: 'Figurine inspirée de César.'
    },
    {
      id: 4,
      name: 'Cléopâtre',
      price: 37.99,
      image: new URL('./Images-figurines/cleopatre-figurine-6.PNG', import.meta.url).href,
      description: 'Figurine inspirée de Cléopâtre.'
    },
    {
      id: 5,
      name: 'Idéfix',
      price: 24.99,
      image: new URL('./Images-figurines/idefix-figurine-3.PNG', import.meta.url).href,
      description: 'Figurine inspirée d’Idéfix.'
    },
    {
      id: 6,
      name: 'Obélix',
      price: 44.99,
      image: new URL('./Images-figurines/obelix-figurine-2.PNG', import.meta.url).href,
      description: 'Figurine inspirée d’Obélix.'
    }
  ];

  onSortChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.sortOrder = select.value;
  }
}