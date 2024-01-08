import { Component } from '@angular/core';

@Component({
  selector: 'app-cycloid-graph',
  templateUrl: './cycloid-graph.component.html',
  styleUrls: ['./cycloid-graph.component.css'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>'
})
export class CycloidGraphComponent {
  public graph = {
    data: [
        {
          x: [] as number[],
          y: [] as number[],
          type: 'scatter',
          marker: {color: 'blue'},
          mode: 'lines',
          name: 'y = x^2'
        }
        ],
    layout: {
      title: 'Quadratic Function: y = x^2',
      xaxis: {
        title: 'X Axis'
      },
      yaxis: {
        title: 'Y Axis'
      },
      height: 700,
      width: 700,
    }
  };

  constructor() {
    this.generateQuadraticData();
  }

  generateQuadraticData() {
    const xValues = [];
    const yValues = [];
    for (let x = -20; x <= 20; x += 0.1) {
      xValues.push(x);
      yValues.push(Math.pow(x, 2)); // Calculate y = x^2 for each x value
    }
    this.graph.data[0].x = xValues;
    this.graph.data[0].y = yValues;
  }
}
