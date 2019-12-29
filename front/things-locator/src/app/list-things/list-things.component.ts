import { Component, OnInit } from '@angular/core';
import {THINGS} from '../domain/mocked-things';
import {Thing} from '../domain/thing';

@Component({
  selector: 'app-list-things',
  templateUrl: './list-things.component.html',
  styleUrls: ['./list-things.component.css']
})
export class ListThingsComponent implements OnInit {

  things = THINGS;
  selectedThing: Thing;

  constructor() { }

  ngOnInit() {
  }

  onSelect(thing: Thing): void {
    this.selectedThing = thing;
  }

}
