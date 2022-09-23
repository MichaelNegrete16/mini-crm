import { Injectable , EventEmitter} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  // Crear un objeto observable
  $modal = new EventEmitter<any>()

}
