import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex Carpenter\'s Site';
  pastPuppyUrls =["../assets/images/Bailey.jpeg","../assets/images/Frankie.jpeg","../assets/images/KashiPuppies.jpeg"];
  otherAnimalUrls =["../assets/images/MunchAndElla.jpeg","../assets/images/SilkieRooster.jpeg",
  "../assets/images/Silkies.jpeg","../assets/images/TwitterAndCrunch.jpeg","../assets/images/Silkie.jpeg"];
  dogsUrls =["../assets/images/CarpetDogs.jpeg","../assets/images/Council.jpeg","../assets/images/Kashi2.jpg",
  "../assets/images/Kashi.jpg","../assets/images/Lexi.JPG","../assets/images/Lounging.jpeg"
  ,"../assets/images/Rearview.jpeg","../assets/images/Silloute.jpeg","../assets/images/Nelson.jpg","../assets/images/Nelson2.jpg"
  ,"../assets/images/Nelson3.jpg","../assets/images/Matching.jpg"];
}
