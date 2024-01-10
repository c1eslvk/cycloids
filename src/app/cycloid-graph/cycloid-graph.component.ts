import { Component } from '@angular/core';

@Component({
  selector: 'app-cycloid-graph',
  templateUrl: './cycloid-graph.component.html',
  styleUrls: ['./cycloid-graph.component.css'],
  template: '<plotly-plot [data]="graph.data" [layout]="graph.layout [config]="graph.config""></plotly-plot>'
})
export class CycloidGraphComponent {
  rValue = 1;
  maxXMultiplier = 2;

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
      title: 'Cycloids',
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
          x0: (this.maxXMultiplier * Math.PI) - this.rValue,
          y0: 0,
          x1: (this.maxXMultiplier * Math.PI) + this.rValue,
          y1: this.rValue * 2,
          line: {
            color: 'black'
          }
        },
        {
          type: 'line',
          x0: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)),
          y0: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)),
          x1: this.maxXMultiplier * Math.PI,
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
          x0: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)) + 0.2,
          y0: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)) + 0.2,
          x1: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)) - 0.2,
          y1: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)) - 0.2,
          line: {
            color: 'red'
          }
        },
        {
          type: 'circle',
          fillcolor: 'red',
          xref: 'x',
          yref: 'y',
          x0: this.maxXMultiplier * Math.PI + 0.04,
          y0: this.rValue + 0.04,
          x1: this.maxXMultiplier * Math.PI - 0.04,
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
    this.generateCycloidData(this.rValue, this.maxXMultiplier);
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

    this.updateShapes(this.rValue, this.maxXMultiplier);
  }

  onSliderChange() {
    this.generateCycloidData(this.rValue, this.maxXMultiplier);
  }

  updateShapes(r: number, maxXValue: number) {
    this.graph.layout.shapes = [
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: (maxXValue * Math.PI) - r,
        y0: 0,
        x1: (maxXValue * Math.PI) + r,
        y1: r * 2,
        line: {
          color: 'black'
        }
      },
      {
        type: 'line',
        x0: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)),
        y0: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)),
        x1: this.maxXMultiplier * Math.PI,
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
        x0: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)) + 0.04,
        y0: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)) + 0.04,
        x1: this.rValue * ((this.maxXMultiplier * Math.PI) - Math.sin(this.maxXMultiplier * Math.PI)) - 0.04,
        y1: this.rValue * (1 - Math.cos(this.maxXMultiplier * Math.PI)) - 0.04,
        line: {
          color: 'red'
        }
      },
      {
          type: 'circle',
          fillcolor: 'red',
          xref: 'x',
          yref: 'y',
          x0: this.maxXMultiplier * Math.PI + 0.04,
          y0: this.rValue + 0.04,
          x1: this.maxXMultiplier * Math.PI - 0.04,
          y1: this.rValue - 0.04,
          line: {
            color: 'red'
          }
        }
    ];
  }
}
