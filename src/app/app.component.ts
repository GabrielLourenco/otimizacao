import { Component } from '@angular/core';
import * as SimpleSimplex from 'simple-simplex'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'otimizacao-app';

  public prioridadeBack;
  public prioridadeFront;
  public prioridadeReuni;
  public prioridadeTests;
  public prioridadeCorre;
  
  public custosBack;
  public custosFront;
  public custosReuni;
  public custosTests;
  public custosCorre;
  
  public qtdeDev;
  public qtdeHrs;
  public qtdeDay;
  public qtdeMon;
  
  public horasBack;
  public horasFront;
  public horasReuni;
  public horasTests;
  public horasCorre;

  public problem;
  public result;

  public objectKeys = Object.keys

  calculate() {
    try {
      const qtdeHrsTotal = this.castNumber(this.qtdeDev) * this.castNumber(this.qtdeDay) * this.castNumber(this.qtdeHrs);
      this.problem = {
        objective: {
          a: this.castNumber(this.prioridadeBack),
          b: this.castNumber(this.prioridadeFront),
          c: this.castNumber(this.prioridadeReuni),
          d: this.castNumber(this.prioridadeTests),
          e: this.castNumber(this.prioridadeCorre),
        },
        constraints: [
          {
            namedVector: { a: this.castNumber(this.custosBack), b: this.castNumber(this.custosFront), c: this.castNumber(this.custosReuni), d: this.castNumber(this.custosTests), e: this.castNumber(this.custosCorre), },
            constraint: '<=',
            constant: this.castNumber(this.qtdeMon),
          },
          {
            namedVector: { a: this.castNumber(this.horasBack), b: this.castNumber(this.horasFront), c: this.castNumber(this.horasReuni), d: this.castNumber(this.horasTests), e: this.castNumber(this.horasCorre), },
            constraint: '<=',
            constant: this.castNumber(qtdeHrsTotal),
          },
          {
            namedVector: { a: 1, b: 0, c: 0, d: 0, e: 0, },
            constraint: '<=',
            constant: this.castNumber(this.horasBack)
          },
          {
            namedVector: { a: 0, b: 1, c: 0, d: 0, e: 0, },
            constraint: '<=',
            constant: this.castNumber(this.horasFront)
          },
          {
            namedVector: { a: 0, b: 0, c: 1, d: 0, e: 0, },
            constraint: '<=',
            constant: this.castNumber(this.horasReuni)
          },
          {
            namedVector: { a: 0, b: 0, c: 0, d: 1, e: 0, },
            constraint: '<=',
            constant: this.castNumber(this.horasTests)
          },
          {
            namedVector: { a: 0, b: 0, c: 0, d: 0, e: 1, },
            constraint: '<=',
            constant: this.castNumber(this.horasCorre)
          },
        ],
        optimizationType: 'max',
      };

      const solver = new SimpleSimplex(this.problem);
      
      
      this.result = solver.solve({
        methodName: 'simplex',
      });
    } catch (error) {
      alert(error)
    }
  }

  castNumber(number) {
    return number
  }

}
