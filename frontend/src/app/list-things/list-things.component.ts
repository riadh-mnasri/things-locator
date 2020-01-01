import {Component, OnInit} from '@angular/core';
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
                private router: Router) {
    }

    listThings() {
        this.thingService.getThingsList()
            .subscribe(data => this.things = data, error => console.log(error));
        this.gotoList();
    }

    ngOnInit() {
        this.listThings();
    }

    gotoList() {
        this.router.navigate(['/things']);
    }

    deleteThing(id: number) {
        this.thingService.deleteThing(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.listThings();
                },
                error => console.log(error));
        this.gotoList();
    }

    thingDetails(id: number) {
        this.router.navigate(['details', id]);
    }

    updateThing(id: number) {
        this.router.navigate(['update', id]);
    }

}
