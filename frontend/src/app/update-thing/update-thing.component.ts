import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Thing} from '../domain/thing';
import {ThingService} from '../services/thing.service';

@Component({
    selector: 'app-update-thing',
    templateUrl: './update-thing.component.html',
    styleUrls: ['./update-thing.component.css']
})
export class UpdateThingComponent implements OnInit {

    id: number;
    thing: Thing;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private thingService: ThingService) { }

    ngOnInit() {
        this.thing = new Thing();

        this.id = this.route.snapshot.params['id'];

        this.thingService.getThing(this.id)
            .subscribe(data => {
                console.log(data)
                this.thing = data;
            }, error => console.log(error));
    }

    updateThing() {
        this.thingService.updateThing(this.id, this.thing)
            .subscribe(data => console.log(data), error => console.log(error));
        this.gotoList();
    }

    onSubmit() {
        this.updateThing();
    }

    gotoList() {
        this.router.navigate(['/things']);
    }
}
