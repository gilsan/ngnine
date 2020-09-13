import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  active = false;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', (e) => {
      console.log(e)
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0);
    })
  }

  @HostListener("document:scroll")
  onScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log('scroll....')
    } else {
      console.log('not scroll.....');
    }
  }

  scroll(e) {
    console.log(e);
  }

  toggle(title: string) {
    this.active = !this.active;
    const width = window.innerWidth;
    if (width > 991) {
      if (title === 'about') {
        document.getElementById('about').scrollIntoView({ behavior: "smooth" });
      } else if (title === 'services') {
        document.getElementById('services').scrollIntoView({ behavior: "smooth" });
      } else if (title === 'work') {
        document.getElementById('work').scrollIntoView({ behavior: "smooth" });
      } else if (title === 'testimonial') {
        document.getElementById('testimonial').scrollIntoView({ behavior: "smooth" });
      } else if (title === 'contact') {
        document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
      }
    }

  }







}
