import { Injectable } from '@angular/core';
import { Post} from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class JsonphService {
  private jsonURL = 'https://jsonplaceholder.typicode.com/';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a JsonphService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`JsonphService: ${message}`);
  }

  /** GET posts from the server */
  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.jsonURL + "posts/")
    .pipe(
      tap(posts => this.log('fetched posts')),
      catchError(this.handleError('getPosts', []))
    );
  }

  /** GET comments for post from the server */
  getComments (postID:number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.jsonURL + "posts/" + postID + "/comments/")
    .pipe(
      tap(comments => this.log('fetched comments')),
      catchError(this.handleError('getComments', []))
    );
  }


 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
