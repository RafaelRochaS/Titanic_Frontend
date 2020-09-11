import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

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

  constructor() { }

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

  printAll(): void {
    console.log('Name: ' + this.name);
    console.log('Age: ' + this.age);
    console.log('Gender: ' + this.gender);
    console.log('Ticket Class: ' + this.ticketClass);
    console.log('Port: ' + this.port);
    console.log('Sibs: ' + this.sibs);
    console.log('Children: ' + this.children);
  }
}
