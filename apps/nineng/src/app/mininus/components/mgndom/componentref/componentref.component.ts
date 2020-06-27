import {
  AfterViewChecked, AfterViewInit, Component,
  ComponentRef, ElementRef, Injector,
  OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';
import { AComponent } from './a-component/a.component';
import { BComponent } from './b-component/b.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-componentref',
  templateUrl: './componentref.component.html',
  styleUrls: ['./componentref.component.scss']
})
export class ComponentrefComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  component = null;

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
  }


  show(type: string) {
    this.component = type === 'a' ? AComponent : BComponent;
    const factory = this.resolver.resolveComponentFactory(this.component);
    this.vc.clear();
    this.vc.createComponent(factory);
  }

}

/*
blog.angularindepth.com
순서
1. Add components to enty components
2. Add and initialize a veiw container.
3. Get componet factories using ComponentFactoryResolver
  const factory = this.resolver.resolverComponentFactory(ComponentCalss)
4. Use 'createComponent` method of a View Container to render a
   dynamic component
   viewContainer.createComponent(componentFactory)

  Host Views which are linked to a Component

  constructor(private injector: Injector,
            private r: ComponentFactoryResolver) {
    let factory = this.r.resolveComponentFactory(ColorComponent);
    let componentRef = factory.create(injector);
    let view = componentRef.hostView;
 }

*/
