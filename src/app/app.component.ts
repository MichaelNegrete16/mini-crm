// OnInit no es nada más y nada menos que una función que forma parte del Life Cicle Hooks (ciclo de vida).
import { Component, OnInit } from '@angular/core';
// Modulo Para la conexion http
import { DataService } from './services/data.services';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Mi Primera App En Angular';
  saludo = 'saludos desde angular';
  event: any = [];
  data = {
    name: '',
    lastName: '',
    telefono: '',
    direccion: '',
    email: ''
  };

  constructor(private dataService: DataService){
    console.log('El componente se ha creado')
  }

  ngOnInit(): void {
      console.log('El Componente se ha inicializado')
      this.dataService.getData()
        .subscribe((response: any) => this.event = response.msg)
      
  }

  save(datos: NgForm) {
    console.log(datos.value)
    this.dataService.postData(datos.value)
      .subscribe(response => console.log(response))
  }

  

}
