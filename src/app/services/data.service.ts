import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { DataModel } from '../models/data.model';
import { ResultModel } from '../models/result.model';
import { PayloadModel } from '../models/payload.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: DataModel = {
    name: '',
    age: 0,
    gender: '',
    ticketClass: '',
    port: '',
    sibs: 0,
    children: 0,
    survived: true
  };

  options = {headers: {'Content-Type': 'application/json'}};

  constructor(private http: HttpClient) { }

  setName(name: string): void {
    this.data.name = name;
  }

  getName(): string {
    return this.data.name;
  }

  setAge(age: number): void {
    this.data.age = age;
  }

  getAge(): number {
    return this.data.age;
  }

  setGender(gender: string): void {
    this.data.gender = gender;
  }

  getGender(): string {
    return this.data.gender;
  }

  setTicketClass(ticketClass: string): void {
    this.data.ticketClass = ticketClass;
  }

  getTicketClass(): string {
    return this.data.ticketClass;
  }

  setPort(port: string): void {
    this.data.port = port;
  }

  getPort(): string {
    return this.data.port;
  }

  setSibs(sibs: number): void {
    this.data.sibs = sibs;
  }

  getSibs(): number {
    return this.data.sibs;
  }

  setChildren(children: number): void {
    this.data.children = children;
  }

  getChildren(): number {
    return this.data.children;
  }

  setSurvived(survived: boolean): void {
    this.data.survived = survived;
  }

  generateSurvival(): boolean {
    const value = Math.random();
    let survived: boolean;

    if (value > 0.5) {
        survived = true;
    } else {
        survived = false;
    }

    return survived;
  }

  getSurvived(): Observable<ResultModel> {
    const payload = this.setPayload();

    return this.http.post<ResultModel>(`${environment.API}/api/model/predict`,
                                        JSON.stringify(payload),
                                        this.options);
  }

  setPayload(): PayloadModel {
    const payload: PayloadModel = {
      passenger_id: this.generatePassengerId(),
      pclass: parseInt(this.data.ticketClass, 10),
      sex: this.data.gender,
      age: this.data.age,
      sibsp: this.data.sibs,
      parch: this.data.children,
      fare: this.generateFare(),
      cabin: this.generateCabin(),
      embarked: this.data.port
    };

    return payload;
  }

  generatePassengerId(): number {
    return 0;
  }

  generateFare(): number {
    return 1;
  }

  generateCabin(): string {
    return 'CAB';
  }

  printAll(): void {
    console.log('Name: ' + this.data.name);
    console.log('Age: ' + this.data.age);
    console.log('Gender: ' + this.data.gender);
    console.log('Ticket Class: ' + this.data.ticketClass);
    console.log('Port: ' + this.data.port);
    console.log('Sibs: ' + this.data.sibs);
    console.log('Children: ' + this.data.children);
  }

  resetValues(): void {
    this.data.name = '';
    this.data.age = 0;
    this.data.gender = '';
    this.data.ticketClass = '';
    this.data.port = '';
    this.data.sibs = 0;
    this.data.children = 0;
    this.data.survived = false;
  }
}
