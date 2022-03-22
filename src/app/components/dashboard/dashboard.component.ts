import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 urlImagen ="https://cdn-icons-png.flaticon.com/512/1116/1116453.png"  //creamos una variable de la imagen para pasarla al html 
 ciudad="";
 temperatura=0;
 clima="";
 humedad=0;
 loading= false ;
query=false;
mostrarError=false;

  constructor(private _climaService: ClimaService) { }/* aqui inyectamos el servicio que trae los datos de la app le generamos un nombre y lo importamos con el nombre que tiene en el servicio */

  
  ngOnInit(): void {
  }
  obtenerClima(){
    console.log(this.ciudad)
    this.query=false
    this.loading=true
    this._climaService.getCLima(this.ciudad).subscribe(data =>{/* para poder usar el servicio el metodo se tiene que subcribir */
      this.loading=false;
      this.query=true;
      this.temperatura= data.main.temp - 273;
      this.humedad= data.main.humidity;
      this.clima=data.weather[0].main
    },error=>{
      this.loading=false
      this.error();
    })
  }
error(){/* esta funcion muestra el mensaje de error y limpia el campo ciudad luego de 3 segundos */
  this.mostrarError=true;
  setTimeout(()=>{
    this.mostrarError=false;
    this.ciudad=""
  },3000)
}
  

}
