import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FlotCharts } from 'app/shared/init-flotcharts';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  title = '123';

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      $(FlotCharts);

      setTimeout(() => {
        this.title = '456';
        // this.cd.markForCheck();
        this.cd.detectChanges();
      }, 2000);

    });
  }

  debug() {
    console.log(new Date());
  }
}
