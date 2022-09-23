
// OnInit no es nada más y nada menos que una función que forma parte del Life Cicle Hooks (ciclo de vida).
import { Component, OnInit, ViewChild } from '@angular/core';
// Modulo Para la conexion http
import { DataService } from './services/data.services';
import { dataEvent } from './models/event';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  event: any = [];
  data: dataEvent = {
    // _id: '',
    name: '',
    lastName: '',
    telefono: 0,
    direccion: '',
    email: ''
  };

  search:string

  @ViewChild('div') divElement;
  @ViewChild('button') buttonElement;

  modalSwitch:boolean = false ;

  // llamar al servicio observable para poder consumirlo
  constructor(private dataService: DataService){
    console.log('El componente se ha creado')
  }
  
  // Esta funciona se inicia apenas inicia el componente para poder escuchar el componente sel service
  ngOnInit(): void {
      console.log('El Componente se ha inicializado')

      // Consumo de la api para hacer un get
      this.getData()
  }

  // save(datos: NgForm) {
  //   console.log(datos.value)
  //   this.dataService.postData(datos.value)
  //     .subscribe(response => console.log(response))
  // }
  getData(){
    this.dataService.getData()
        .subscribe((response: any) => this.event = response.msg)
  }

  save(){
    console.log(this.data)
    
    if (this.data._id) {
      console.log('Entre')
      return this.dataService.updateData(this.data).subscribe(res => {
        console.log(res)
        this.getData()

        const test = this.divElement.nativeElement
        test.setAttribute('hidden','')

        const buttontest = this.buttonElement.nativeElement
        buttontest.removeAttribute('hidden','')

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos Guardado Con exito',
          showConfirmButton: false,
          timer: 1500
        })

      })
    }
    return this.dataService.postData(this.data)
      .subscribe(
        res => {
          console.log(res)
        // llamar los datos nuevos
          this.getData()

          const test = this.divElement.nativeElement
          test.setAttribute('hidden','')

          const buttontest = this.buttonElement.nativeElement
          buttontest.removeAttribute('hidden','')

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos Guardado Con exito',
            showConfirmButton: false,
            timer: 1500
          })

        },
        err => console.log(err)
      )

    



    
  }

  deleteGame(id: string){
    Swal.fire({
      title: 'Estas seguro?',
      text: "No Podras Revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.dataService.deleteGames(id).subscribe(
          res => {
            console.log(res)
            // llamar los datos nuevos
            this.getData()
          },
          err => console.log(err)
          )

          Swal.fire(
            'Eliminado!',
            'El Archivo ha sido eliminado con exito!.',
            'success'
          )
      }
    })
    
  }

  updateGame(dataEvent: any){
    
    const test = this.divElement.nativeElement
    test.removeAttribute('hidden','')

    this.data={
      ...dataEvent
    }
    console.log(this.data)
    
    this.dataService.updateData(dataEvent)
    this.getData()

    

  }

  addNew(){
    const test = this.divElement.nativeElement
    test.removeAttribute('hidden','')

    const buttontest = this.buttonElement.nativeElement
    buttontest.setAttribute('hidden','')

    this.data = {
      
      name:'',
      lastName: '',
      telefono: 0,
      direccion: '',
      email: ''
    }

  }

  cancelOperation(){
    const test = this.divElement.nativeElement
    test.setAttribute('hidden','')

    const buttontest = this.buttonElement.nativeElement
    buttontest.removeAttribute('hidden','')
  }

  seeData(name:string){

    const [resutl] = this.event.filter(registro => (registro.telefono + '') === name || registro.name === name)
    console.log(resutl)
    this.data={
      ...resutl
    }

    const test = this.divElement.nativeElement
    test.removeAttribute('hidden','')
    const test2 = this.buttonElement.nativeElement
    test2.setAttribute('hidden','')
    
    
  }


  

}
