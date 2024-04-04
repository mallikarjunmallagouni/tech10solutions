import { Component, ElementRef, OnInit, VERSION, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router,private app: ElementRef,private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {

  }

  navigate(value: any) {
    this.router.navigate([value])
  }


}
