import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryListResponse } from '../models/GroceryItem';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceryItemsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = environment.testDataUrl;

  getGroceryItems(): Observable<GroceryListResponse> {
    return this.http.get<GroceryListResponse>(this.dataUrl);
  }
}
