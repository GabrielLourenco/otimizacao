import { Component, OnInit } from '@angular/core';
import * as SimpleSimplex from 'simple-simplex'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'otimizacao-app';

  ngOnInit() {
    const solver = new SimpleSimplex({
      objective: {
        a: 0.43,
        b: 0.23,
        c: 0.6,
        d: 1.09,
        e: 0.99,
        f: 0.45,
        g: 0.65,
      },
      constraints: [
        {
          namedVector: { a: 1.96, b: 2.16, c: 3.05, d: 3.66, e: 3, f: 0.1, g: 3.8 },
          constraint: '<=',
          constant: 22550,
        },
        {
          namedVector: { a: 0.00166, b: 0.00156, c: 0.00112, d: 0.00176, e: 0.00553, f: 0.00143, g: 0.00052 },
          constraint: '<=',
          constant: 13.5,
        },
        {
          namedVector: { a: 1, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
          constraint: '<=',
          constant: 3692,
        },
        {
          namedVector: { a: 1, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 },
          constraint: '>=',
          constant: 1984,
        },
        {
          namedVector: { a: 0, b: 1, c: 0, d: 0, e: 0, f: 0, g: 0 },
          constraint: '<=',
          constant: 4573,
        },
        {
          namedVector: { a: 0, b: 1, c: 0, d: 0, e: 0, f: 0, g: 0 },
          constraint: '>=',
          constant: 2145,
        },
        {
          namedVector: { a: 0, b: 0, c: 1, d: 0, e: 0, f: 0, g: 0 },
          constraint: '<=',
          constant: 1497,
        },
        {
          namedVector: { a: 0, b: 0, c: 1, d: 0, e: 0, f: 0, g: 0 },
          constraint: '>=',
          constant: 755,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 1, e: 0, f: 0, g: 0 },
          constraint: '<=',
          constant: 1306,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 1, e: 0, f: 0, g: 0 },
          constraint: '>=',
          constant: 678,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 1, f: 0, g: 0 },
          constraint: '<=',
          constant: 609,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 1, f: 0, g: 0 },
          constraint: '>=',
          constant: 327,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 1, g: 0 },
          constraint: '<=',
          constant: 387,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 1, g: 0 },
          constraint: '>=',
          constant: 198,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 1 },
          constraint: '<=',
          constant: 1632,
        },
        {
          namedVector: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 1 },
          constraint: '>=',
          constant: 853,
        },
      ],
      optimizationType: 'max',
    });
     
    // call the solve method with a method name
    const result = solver.solve({
      methodName: 'simplex',
    });
     
    // see the solution and meta data
    console.log(result.solution.coefficients)
    console.log({
      solution: result.solution,
      isOptimal: result.details.isOptimal,
    });
  }
}
