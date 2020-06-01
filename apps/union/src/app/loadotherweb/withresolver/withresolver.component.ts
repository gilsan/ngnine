import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-withresolver',
  templateUrl: './withresolver.component.html',
  styleUrls: ['./withresolver.component.scss']
})
export class WithresolverComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['paymentmethod.htm'])
  }

}
