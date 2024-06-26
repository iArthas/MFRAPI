import { RickAndMortyApiService } from './../../service/rick-and-morty-api.service';
import { Component, OnInit } from '@angular/core';
import { LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Character } from '../../service/character';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [NgFor, NavbarComponent,FooterComponent, UpperCasePipe, LowerCasePipe]
})
export class HomeComponent implements OnInit {

  constructor(private service: RickAndMortyApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  characters: Character[] = [];
  allCharacters: Character[] = [];

  handleButtonClick(id: string): void {
    console.log(`Button with id ${id} was clicked`);
    if (id === "ver-todos") {
      this.characters = [...this.allCharacters];
    } else {
      this.filterByStatus(id);
    }
  }

  getData() {
    this.service.getCharacters().subscribe({
      next: (data) => {
        this.allCharacters = data.results;
        this.characters = data.results;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterByStatus(status: string): void {
    this.characters = this.allCharacters.filter(character => character.status.toLowerCase() === status.toLowerCase());
  }
}
