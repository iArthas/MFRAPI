import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient de Angular para realizar solicitudes HTTP
import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular para marcar la clase como inyectable
import { Observable, catchError, of } from 'rxjs'; // Importa las funciones Observable, catchError y of de la librería RxJS para manejar observables y errores
import { Character } from './character'; // Importa la interfaz Character desde el archivo character.ts en el mismo directorio

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private apiUrl: string = 'https://rickandmortyapi.com/api'; // Declara una propiedad privada apiUrl que contiene la URL base de la API

  constructor(private http: HttpClient) { } // Constructor que inyecta el servicio HttpClient para realizar peticiones HTTP

  getCharacters(): Observable<{ results: Character[] }> { // Método que devuelve un observable que emite un objeto con resultados de tipo Character[]
    return this.http.get<{ results: Character[] }>(`${this.apiUrl}/character`).pipe( // Realiza una solicitud GET a la API de Rick and Morty para obtener personajes
      catchError((error) => { // Captura y maneja cualquier error que ocurra durante la solicitud HTTP
        console.log(error); // Imprime el error en la consola para propósitos de depuración
        return of({ results: [] }); // Devuelve un observable que emite un objeto vacío en caso de error
      })
    );
  }
}
