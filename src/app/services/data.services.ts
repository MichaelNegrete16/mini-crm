import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { dataEvent } from '../models/event'

@Injectable({
    providedIn: 'root'
})
export class DataService{

    constructor(private http: HttpClient){
        console.log('Servicio Http')
    }

    getData(): any {
        return this.http.get('https://crm-app-backend.herokuapp.com/api/events')
    }

    postData(persona: any){
        return this.http.post(`https://crm-app-backend.herokuapp.com/api/events`,persona)
    }

    updateData(event: dataEvent) {
        console.log(event)
        return this.http.put(`https://crm-app-backend.herokuapp.com/api/events/${event._id}`, event)
    }

    deleteGames(id: string){
        return this.http.delete(`https://crm-app-backend.herokuapp.com/api/events/${id}`)
    }
}