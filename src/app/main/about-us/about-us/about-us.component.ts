import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/Services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutusContent:any;
  description:any;
  title:any;

  constructor(private aboutUs:AboutUsService) { }

  ngOnInit(): void {
    this.aboutUs.getABoutUs().subscribe(response=>{
      this.aboutusContent= response['meta']
      this.description = this.aboutusContent.socialTags.description;
      this.title = this.aboutusContent['og:title'];

      console.log(this.aboutusContent)
    })
  }
  


}
