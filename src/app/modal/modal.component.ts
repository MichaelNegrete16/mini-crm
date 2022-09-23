import { PassService } from './../services/pass.service';
import { Component, OnInit , Input} from '@angular/core';
import { dataEvent } from '../models/event';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  data: dataEvent = {
    name: '',
    lastName: '',
    telefono: 0,
    direccion: '',
    email: ''
  };

  // @Input() value: dataEvent;
  

  
  // Consumir servicio
  constructor(private modalSS: SwitchService, private pass: PassService) { }
  
  
    
  ngOnInit(): void {

    this.refresData()
  }

  save(){
    console.log('Test')
  }

  refresData(){
    this.pass.$datos.subscribe(dta => {
      this.data={
        name: dta.name,
        lastName: dta.lastName,
        telefono: dta.telefono,
        direccion: dta.direccion,
        email: dta.email
      }
      console.log(dta)
    })
  }

  closeModal(){
    // Emitir el valor false para poder usarlo en otros componentes
    this.modalSS.$modal.emit(false)
  }

  

}
