import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.canvas.width = 900;
    this.ctx.canvas.height=400;
    let myChart = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [
          {
            label: '',
            backgroundColor: 'pink',
            borderColor: 'red',
            fill: true,
            data: [
              { x: 12.2, y: 1.65 },
              { x: 13.5, y: 1.7 },
              { x: 15.1, y: 1.75 },
              { x: 17.1, y: 1.69 },
              { x: 19.3, y: 1.63 },
             
            ],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: '',
        },
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                stepSize: 1,
                userCallback: function (tick) {
                  if (tick >=10) {
                    return (tick /1).toString() + '.0';
                  }
                  return tick.toString() + '';
                },
              },
              scaleLabel: {
                labelString: 'Moisture Content(%)',
                display: true,
              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
              ticks: {
                stepSize: 0.02,
                userCallback: function (tick) {
                  return tick.toString() + '';
                },
              },
              scaleLabel: {
                labelString: 'Dry Density(g/cc) ',
                display: true,
              },
            },
          ],
        },
      },
    });
  }
}
