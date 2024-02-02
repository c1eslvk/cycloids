import { Component } from '@angular/core';

@Component({
  selector: 'app-cycloid-graph',
  templateUrl: './cycloid-graph.component.html',
  styleUrls: ['./cycloid-graph.component.css'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout [config]="graph.config""></plotly-plot>'
})
export class CycloidGraphComponent {
  rValue = 1;
  tValue = 2;

  public graph = {
    data: [
        {
          x: [] as number[],
          y: [] as number[],
          type: 'scatter',
          marker: {color: 'blue'},
          mode: 'lines',
          name: 'cycloid'
        }
        ],
    layout: {
      xaxis: {
        title: 'X Axis',
        tickmode: "linear",
        tick0: 0,
        dtick: Math.PI / 2,
        autorange: false,
        range: [0, 5],
        scaleanchor: 'y',
      },
      yaxis: {
        title: 'Y Axis',
        autorange: false,
        range: [0, 5],
      },
      height:500,
      width: 1000,
      dragmode: 'pan',
      shapes: [
        {
          type: 'circle',
          xref: 'x',
          yref: 'y',
          x0: (this.tValue * Math.PI),
          y0: 0,
          x1: (this.tValue * Math.PI) + 2 * this.rValue,
          y1: this.rValue * 2,
          line: {
            color: 'black'
          }
        },
        {
          type: 'line',
          x0: this.rValue * ((this.tValue * Math.PI) - Math.sin(this.tValue * Math.PI)),
          y0: this.rValue * (1 - Math.cos(this.tValue * Math.PI)),
          x1: this.tValue * Math.PI,
          y1: this.rValue,
          line: {
            color: 'red'
          },
        },
        {
          type: 'circle',
          fillcolor: 'red',
          xref: 'x',
          yref: 'y',
          x0: this.rValue * ((this.tValue * Math.PI) - Math.sin(this.tValue * Math.PI)) + (0.4 * this.rValue),
          y0: this.rValue * (1 - Math.cos(this.tValue * Math.PI)) + (0.4 * this.rValue),
          x1: this.rValue * ((this.tValue * Math.PI) - Math.sin(this.tValue * Math.PI)) - (0.4 * this.rValue),
          y1: this.rValue * (1 - Math.cos(this.tValue * Math.PI)) - (0.4 * this.rValue),
          line: {
            color: 'red'
          }
        },
        {
          type: 'circle',
          fillcolor: 'red',
          xref: 'x',
          yref: 'y',
          x0: this.tValue * Math.PI + 0.04,
          y0: this.rValue + 0.04,
          x1: this.tValue * Math.PI - 0.04,
          y1: this.rValue - 0.04,
          line: {
            color: 'red'
          }
        }
      ]
    },
    config: {
      scrollZoom: true,
      modeBarButtonsToRemove: ['zoom', 'zoomIn', 'zoomOut']
    },
  };

  constructor() {
    this.generateCycloidData(this.rValue, this.tValue);
  }

  generateCycloidData(r: number, maxXValue: number) {
    const xValues = [];
    const yValues = [];
    const numPoints = 100;
  
    for (let t = 0; t <= maxXValue * Math.PI; t += (2 * Math.PI) / numPoints) {
      const x = r * (t - Math.sin(t));
      const y = r * (1 - Math.cos(t));
      xValues.push(x);
      yValues.push(y);
    }
  
    this.graph.data[0].x = xValues;
    this.graph.data[0].y = yValues;

    this.updateShapes(r, maxXValue);
  }

  onSliderChange() {
    this.generateCycloidData(this.rValue, this.tValue);
  }

  updateShapes(r: number, t: number) {
    this.graph.layout.shapes = [
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: (r * t * Math.PI) - r,
        y0: 0,
        x1: (r * t * Math.PI) + r,
        y1: r * 2,
        line: {
          color: 'black'
        }
      },
      {
        type: 'line',
        x0: r * ((t * Math.PI) - Math.sin(t * Math.PI)),
        y0: r * (1 - Math.cos(t * Math.PI)),
        x1: r * t * Math.PI,
        y1: r,
        line: {
          color: 'red'
        },
      },
      {
        type: 'circle',
        fillcolor: 'red',
        xref: 'x',
        yref: 'y',
        x0: r * ((t * Math.PI) - Math.sin(t * Math.PI)) + (0.05 * r),
        y0: r * (1 - Math.cos(t * Math.PI)) + (0.05 * r),
        x1: r * ((t * Math.PI) - Math.sin(t * Math.PI)) - (0.05 * r),
        y1: r * (1 - Math.cos(t * Math.PI)) - (0.05 * r),
        line: {
          color: 'red'
        }
      },
      {
          type: 'circle',
          fillcolor: 'red',
          xref: 'x',
          yref: 'y',
          x0: r * t * Math.PI + (0.05 * r),
          y0: r + (0.05 * r),
          x1: r * t * Math.PI - (0.05 * r),
          y1: r - (0.05 * r),
          line: {
            color: 'red'
          }
        }
    ];
  }
}
