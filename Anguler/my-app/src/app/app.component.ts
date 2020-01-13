// Importing the class for the root comp
import { Component, Directive } from '@angular/core';

// If you are using Angular 2 you need to use nested then do
// import { HomeComponent } from './home/home.component';
// also you will need to add directive below


// selector is just a tag we are looking to fill inside assets/index.html
// Says anything inside app-root fill it up using below files when application firesUp.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


// Template 
// You should see the name now in web browser. 
// @Component({
//   selector: 'app-root',
//   template: '<h1> {{name}} </h1>',
//   styleUrls: ['./app.component.css']
// })

// export means its available outside of this file.
// AppComponent is because we called the files as app.comp
// add a component called name 
// then in appComp.html call it as  <span>{{ title }} app is running!</span>
export class AppComponent {
  title = 'my-angular-app';
  name = 'Ahmad';
  ninja = {
    name: "Ahmad",
    belt: "Blue",
  }
  Yell(e) {
    alert('I am yelling');
  }
}
