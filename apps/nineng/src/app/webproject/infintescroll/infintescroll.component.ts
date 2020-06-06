// tslint:disable-next-line:ordered-imports
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { fromEvent, Observable, of } from 'rxjs';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { DATA, getAll, getList, getSearchData } from './infinitescroll';

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
  private term = '';
  list$: Observable<any>;
  lists = [];
  @ViewChild('search') search: ElementRef;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    // this.getData(this.page, this.limit);
    this.getAll();
  }

  getAll() {
    this.list$ = getAll();
    // this.list$.subscribe((data) => this.lists = data);
  }

  getData(page: number, limit: number) {
    this.list$ = getList(page, limit);
    this.list$.subscribe((data) => {
      // console.log(data);
      this.lists = data;
    });
  }

  getSearchData(data) {
    this.list$ = getSearchData(data);
    // this.list$.subscribe((list) => console.log(list));
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

    combineLatest([code$, value$, this.list$]).subscribe(([code, value, lists]) => {
      if (code === 'Enter' && value !== undefined || null) {
        this.getSearchData(value);
      }
    });

  }

}
