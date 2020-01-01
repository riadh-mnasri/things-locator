import { Component, OnInit } from '@angular/core';
import {THINGS} from '../domain/mocked-things';
import {Thing} from '../domain/thing';
import {ThingService} from '../services/thing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-things',
  templateUrl: './list-things.component.html',
  styleUrls: ['./list-things.component.css']
})
export class ListThingsComponent implements OnInit {

  things = [];
  selectedThing: Thing;

  constructor(private thingService: ThingService,
              private router: Router) { }

  listThings() {
    this.thingService.getThingsList()
      .subscribe(data => this.things = data, error => console.log(error));
    this.gotoList();
  }
  
  ngOnInit() {
    this.listThings();
  }


  onSelect(thing: Thing): void {
    this.selectedThing = thing;
  }

  gotoList() {
    this.router.navigate(['/things']);
  }

}
