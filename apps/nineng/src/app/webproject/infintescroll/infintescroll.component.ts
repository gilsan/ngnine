// tslint:disable-next-line:ordered-imports
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, fromEvent } from 'rxjs';
import { DATA, getAll, getList } from './infinitescroll';
import { debounceTime, distinctUntilChanged, shareReplay, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-infintescroll',
  templateUrl: './infintescroll.component.html',
  styleUrls: ['./infintescroll.component.scss'],
})
export class InfintescrollComponent implements OnInit, AfterViewInit {
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/webproject/infintescroll';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);

  private limit = 5;
  private page = 1;
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  list$: Observable<any>;
  @ViewChild('search') search: ElementRef;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    //  this.getData(this.page, this.limit);
    this.getAll();
  }

  getAll() {
    this.list$ = getAll();
  }

  getData(page: number, limit: number) {
    this.list$ = getList(page, limit);
    this.list$.subscribe((data) => {
      console.log(data);
    });
  }

  ngAfterViewInit() {
    const search$ = fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(400),
      distinctUntilChanged(),
      shareReplay());
    const code$ = search$.pipe(
      map((e: any) => e.code),
    );

    const value$ = search$.pipe(
      map((e: any) => e.target.value),
    );

    combineLatest([code$, value$]).subscribe(([code, value]) => {
      if (code === 'Enter' && value !== undefined || null) {
        console.log('[][] ', code, value);
      }
    });
  }

}
