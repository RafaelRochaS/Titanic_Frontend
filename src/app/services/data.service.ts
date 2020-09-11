import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  name: string;
  age: number;
  gender: string;
  ticketClass: string;
  port: string;
  sibs: number;
  children: number;
  survived: boolean;

  private titanicUrl = 'api/values';

  constructor(private http: HttpClient) { }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  setGender(gender: string): void {
    this.gender = gender;
  }

  getGender(): string {
    return this.gender;
  }

  setTicketClass(ticketClass: string): void {
    this.ticketClass = ticketClass;
  }

  getTicketClass(): string {
    return this.ticketClass;
  }

  setPort(port: string): void {
    this.port = port;
  }

  getPort(): string {
    return this.port;
  }

  setSibs(sibs: number): void {
    this.sibs = sibs;
  }

  getSibs(): number {
    return this.sibs;
  }

  setChildren(children: number): void {
    this.children = children;
  }

  getChildren(): number {
    return this.children;
  }

  setSurvived(survived: boolean): void {
    this.survived = survived;
  }

  getSurvived(): boolean {
    return this.generateSurvival();
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

  printAll(): void {
    console.log('Name: ' + this.name);
    console.log('Age: ' + this.age);
    console.log('Gender: ' + this.gender);
    console.log('Ticket Class: ' + this.ticketClass);
    console.log('Port: ' + this.port);
    console.log('Sibs: ' + this.sibs);
    console.log('Children: ' + this.children);
    console.log('Survived: ' + this.survived);
  }

}
