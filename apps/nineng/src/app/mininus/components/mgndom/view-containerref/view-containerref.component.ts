import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-containerref',
  templateUrl: './view-containerref.component.html',
  styleUrls: ['./view-containerref.component.scss']
})
export class ViewContainerrefComponent implements OnInit, AfterViewInit {

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;
  // tslint:disable-next-line: max-line-length
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/mininus/components/mgndom/view-containerref';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }
  /****
   * class ViewContainerRef {
      ...
      clear() : void
      insert(viewRef: ViewRef, index?: number) : ViewRef // 뷰추가
      get(index: number) : ViewRef
      indexOf(viewRef: ViewRef) : number
      detach(index?: number) : ViewRef  // 뷰삭제
      move(viewRef: ViewRef, currentIndex: number) : ViewRef
      element: ElementRef
      length: number
  
      createComponent(componentFactory...): ComponentRef<C>
      createEmbeddedView(templateRef...): EmbeddedViewRef<C>
      ...
  }
  }
   */
  ngAfterViewInit() {
    console.log(this.vc.element.nativeElement.textContent);
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }

}
