import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Olamundo';
  valor1: number | undefined;
  valor2: number | undefined;
  resultado: number | undefined;

  num1(){
    this.valor1 = 1;
  }
  num2(){
    this.valor1 = 2;
  }
  num3(){
    this.valor1 = 3;
  }
  num4(){
    this.valor1 = 4;
  }
  num5(){
    this.valor1 = 5;
  }
  num6(){
    this.valor1 = 6;
  }
  num7(){
    this.valor1 = 7;
  }
  num8(){
    this.valor1 = 8;
  }
  num9(){
    this.valor1 = 9;
  }
  somar(){
    this.resultado = Number(this.valor1) + Number(this.valor2);
  }

  subtrair(){
    this.resultado = Number(this.valor1) - Number(this.valor2);
  }

  multi(){
    this.resultado = Number(this.valor1) * Number(this.valor2);
  }

  div(){
    if(Number(this.valor2) != 0){
      this.resultado = Number(this.valor1) / Number(this.valor2);
    }
    else ('não é possível realizar uma divisão por 0');
  }
}
