import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Software Developer",
        company: "Moringa School",
        color: "#3781c2",
        companylogo: "https://drive.google.com/file/d/19CQf37Y7Hxqjxt9_m1xbF3w64z7bQPID/view?usp=sharing",
        date: "June 2020 - Dec 2020",
        
        desc: "Software Development Student",
      },
      {
        role: "Bachelor of Computer Science",
        company: "Meru University",
        color: "#3f703f",
        companylogo: "https://drive.google.com/file/d/1MTo3w0ySfjYCye18XCrCAJtGyt-LJSDD/view?usp=sharing",
        date: "Sept 2014 – Sept 2018",
        desc: "I have completed my 4 year graduation degree in computer science with second class upper division",
        
      },
      {
        role: "ICT/Computer Science intern  ",
        company: "Kericho County Government",
        color: "#ff9102",
        companylogo: "https://drive.google.com/file/d/19CQf37Y7Hxqjxt9_m1xbF3w64z7bQPID/view?usp=sharing",
        date: "May 2016 – Aug 2016",
        desc: "The 4- Months training focused on networking,hardware troubleshooting and software development",
        },
     
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
