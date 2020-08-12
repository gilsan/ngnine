import { Component, OnInit } from '@angular/core';
import { AwsService } from '../../services/aws.service';

@Component({
  selector: 'app-light-wave',
  templateUrl: './light-wave.component.html',
  styleUrls: ['./light-wave.component.scss']
})
export class LightWaveComponent implements OnInit {

  constructor(
    private awsSeervice: AwsService,
  ) { }

  ngOnInit(): void {
    //  this.getAws();
  }


  // getAws() {
  //   this.awsSeervice.testAwsGet().subscribe(data => {
  //     console.log('[light-wave][21][aws]', data);
  //   })
  // }
}
