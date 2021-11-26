import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  result: boolean = true;
  calculationForm = this.formBuilder.group({
    input: 0,
    mode:''
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.calculationForm.valueChanges.subscribe(()=>{
      const input = this.calculationForm.get('input').value;
      const mode = this.calculationForm.get('mode').value;
      if(mode==='prime'){
        console.log(this.isPrime(input));
        
      }if(mode==='fibonacci'){
        console.log(this.isFibonacci(input));
        
      }
    })
  }


  isPrime(input: number){
    let isPrime = true;
    for(let i = 2;i<input;i++){
      if(input%i==0){
        isPrime = false;
        break;
      }
    }
    return this.result = isPrime;
  }

  isFibonacci(input: number){
    if(input===0){
      return true;
    }
    for(let i=0,fib=0 ;fib<input;i++){
      fib = this.fib(i);
      if(fib===input)
        return this.result = true;
    }
    return this.result = false;
  }
  fib(n:number)
  {
    if (n <= 1)
        return n;
    return this.fib(n-1) + this.fib(n-2);
  }

}
