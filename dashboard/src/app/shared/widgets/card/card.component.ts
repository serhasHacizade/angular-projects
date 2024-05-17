import { Component, Input } from '@angular/core';

import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  Highcharts = Highcharts;
  chartOptions = {};

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: null,
        align: 'left'
      },
      subtitle: {
        text: null
      },
      yAxis: {
        title: {
          useHTML: true,
          text: 'Million tonnes CO<sub>2</sub>-equivalents'
        }
      },
      tooltip: {
        shared: true,
        outside: true
      },
      plotOptions: {
        series: {
          pointStart: 2012
        },
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [{
        data: [71, 78, 39, 66]
      }]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event("resize")
      );
    }, 300)
  }

}
