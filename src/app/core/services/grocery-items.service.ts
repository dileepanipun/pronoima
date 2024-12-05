import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryListResponse } from '../models/GroceryItem';

@Injectable({
  providedIn: 'root'
})
export class GroceryItemsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/todo-items.json';

  getGroceryItems(): Observable<GroceryListResponse> {
    return this.http.get<GroceryListResponse>(this.dataUrl);
  }
}
