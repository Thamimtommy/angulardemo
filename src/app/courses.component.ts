import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector:'course',
    // template:'<h2>{{title}}</h2>' ===> this is called encapsulaton or binding data. it will dynamaically change the value in the browser
    // {{}} === > used for dynamic javascript or typescript

    // interpolation {    }

    /* 
    what is Directives ? 



    
    
    
    */

    // * this symbol is added the prefix to the code to informed the directive are used in the code 


    template:`
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor ="let course of courses ">

        {{course}}
        </li> 
         
    </ul>
    
    
    ` 
    // this is will return the function to the dynamic. just like we can write javascript code in the template component for the browser
})
export class CoursesComponent{
    title = "thamim on running in the street";

    courses: any;
    // getTitle() { 
    //     return this.title;
    
    // }
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourse();
    }
}