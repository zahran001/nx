import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CardDto } from '@nx-demo/util-dtos';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly http = inject(HttpClient);
 
  public getDashboardData(): Observable<CardDto[]> {
    return this.http.get<CardDto[]>('/api/dashboard');
  }
}
