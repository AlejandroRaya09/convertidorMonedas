import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
cantidad:number = 0
tengo:string = "USD"
quiero:string = "USD"
total:number = 0

monedas:string[] = ['USD','EURO','LIBRA']


convertir(){
  switch(this.tengo){
    case 'USD':
      if(this.quiero === 'USD'){
        this.total = this.cantidad
      }
      if(this.quiero === 'EURO'){
        this.total = this.cantidad * .84
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * .75
      }
      break;
    case 'EURO':
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.2
      }
      if(this.quiero === 'EURO'){
        this.total = this.cantidad 
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad * .90
      }
      break;
    case 'LIBRA':
      if(this.quiero === 'USD'){
        this.total = this.cantidad * 1.33
      }
      if(this.quiero === 'EURO'){
        this.total = this.cantidad * 1.11
      }
      if(this.quiero === 'LIBRA'){
        this.total = this.cantidad 
      }
    break;
  }
}

}
 