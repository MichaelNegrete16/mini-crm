import { dataEvent } from './../models/event';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassService {
  $datos: EventEmitter<dataEvent> = new EventEmitter<dataEvent>();
  constructor() { }
}
