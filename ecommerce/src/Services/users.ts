import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class Users {
    private apiUrl = 'http://localhost:3000/users';
constructor(private httpClient:HttpClient){

}
getAll(){
  return this.httpClient.get<Iuser[]>(this.apiUrl);
}
getById(id:number){
  return this.httpClient.get<Iuser>(`${this.apiUrl}/${id}`)
}
create(user:Iuser){
  return this.httpClient.post<Iuser>(this.apiUrl,user)
}
    update(id: number, user: Iuser) {
        return this.httpClient.put<Iuser>(`${this.apiUrl}/${id}`, user);
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.apiUrl}/${id}`);
    }
  }
