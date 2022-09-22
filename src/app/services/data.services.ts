import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

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
        return this.http.post(`https://crm-app-backend.herokuapp.com/api/events`,persona,{
            headers: { 'content-type': 'application/json'}
        })
    }
}