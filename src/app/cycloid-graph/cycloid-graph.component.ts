import { Component } from '@angular/core';

@Component({
  selector: 'app-cycloid-graph',
  templateUrl: './cycloid-graph.component.html',
  styleUrls: ['./cycloid-graph.component.css'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout [config]="graph.config""></plotly-plot>'
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
      title: 'Cycloids',
      xaxis: {
        title: 'X Axis',
        tickvals: [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI, (5 * Math.PI)/2, 3 * Math.PI, (7 * Math.PI)/2, 4 * Math.PI],
        ticktext: ['0', 'π/2', 'π', '3π/2', '2π', '5π/2', '3π', '7π/2', '4π']
      },
      yaxis: {
        title: 'Y Axis'
      },
      height:500,
      width: 1000,
      dragmode: 'pan'
    },
    config: {
      scrollZoom: true,
      modeBarButtonsToRemove: ['zoom', 'zoomIn', 'zoomOut']
    }
  };

  rValue = 1;

  constructor() {
    this.generateCycloidData(this.rValue);
  }

  generateCycloidData(r: number) {
    const xValues = [];
    const yValues = [];
    const numPoints = 100;
  
    for (let t = 0; t <= 4 * Math.PI; t += (2 * Math.PI) / numPoints) {
      const x = r * (t - Math.sin(t));
      const y = r * (1 - Math.cos(t));
      xValues.push(x);
      yValues.push(y);
    }
  
    this.graph.data[0].x = xValues;
    this.graph.data[0].y = yValues;
  }

  onSliderChange() {
    this.generateCycloidData(this.rValue);
  }
}
