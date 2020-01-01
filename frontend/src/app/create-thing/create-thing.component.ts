import { Component, OnInit } from '@angular/core';
import {Thing} from '../domain/thing';
import {ThingService} from '../services/thing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-thing',
  templateUrl: './create-thing.component.html',
  styleUrls: ['./create-thing.component.css']
})
export class CreateThingComponent implements OnInit {

  thing: Thing = new Thing();
  submitted = false

  constructor(private thingService: ThingService,
              private router: Router) { }

  ngOnInit() {
  }

  newThing(): void {
    this.submitted = false;
    this.thing = new Thing();
  }

  save(){
    this.thingService.createThing(this.thing)
      .subscribe(data => console.log(data), error => console.log(error));
    this.thing = new Thing();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/things']);
  }

}
