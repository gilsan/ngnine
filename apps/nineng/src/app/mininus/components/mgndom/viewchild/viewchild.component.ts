import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ColorPickerDirective } from 'ngx-color-picker';
import { ColorSampleComponent } from './color-sample/color-sample.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewChildComponent implements AfterViewInit {

  primary = '#1976d2';
  // tslint:disable-next-line: max-line-length
  source = 'https://github.com/gilsan/ngnine/tree/master/apps/nineng/src/app/mininus/components/mgndom/viewchild';
  safeurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(this.source);
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  @ViewChild('primaryColorSample')
  primarySampleCoponent: ColorSampleComponent;

  @ViewChild('primaryColorSample', { read: ElementRef })
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput') primaryInput: ElementRef;

  @ViewChild('primaryInput', { read: ColorPickerDirective })
  colorPickerDirective: ColorPickerDirective;


  ngAfterViewInit() {
    console.log('primaryColorSample(component): ', this.primarySampleCoponent);
    console.log('primarySampleDiv(read): ', this.primarySampleDiv);
    console.log('primaryInput: ', this.primaryInput);
  }

  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }

}
