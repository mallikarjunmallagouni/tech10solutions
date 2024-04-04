import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services=[
    {serviceImage: './../assets/mobile spesiaization.jpg', title:"Mobile Specialization",description:'Specialization on multiple mobile platforms-Android with kotlin and iOS with Swift.'},
    {serviceImage: './../assets/cloud engineers.jpg', title:"Skilled Cloud Engineers",description:'Engineers specialized in multiple cloud based platforms and paas platforms like Salesforce, Splunk.'},
    {serviceImage: './../assets/integrations.jpg', title:"Integrations with simplicity",description:'We design, integrate and configure APIs with care. Our core principle is flexibility with simplicity.'},
    {serviceImage: './../assets/talent.jpg', title:"Talent",description:'Reporting with Microsoft power bi, Mulesoft, Salesforce, Java, Python, Spark, SnowFlake.'},
    {serviceImage: './../assets/resourse.jpg', title:"Great resources",description:'We work hard to design and code a high quality, easy to use products to our users.'},
    {serviceImage: './../assets/organization.jpg', title:"Organization",description:'Our Codes and files are well organized, so that you can easily find what you want to use.'},
  ]
}
