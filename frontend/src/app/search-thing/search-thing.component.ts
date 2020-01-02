import {Component, OnInit} from '@angular/core';
import {ThingService} from '../services/thing.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-thing',
    templateUrl: './search-thing.component.html',
    styleUrls: ['./search-thing.component.css']
})
export class SearchThingComponent implements OnInit {

    thingName;
    retrievedThings = [];
    submitted = false;

    constructor(private thingService: ThingService,
                private router: Router) {
    }

    ngOnInit() {
    }

    search() {
        this.thingService.getThingsByName(this.thingName)
            .subscribe(data => this.retrievedThings = data, error => console.log(error));
    }

    onSubmit() {
        this.submitted = true;
        this.search();
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

    listThings() {
        this.thingService.getThingsList()
            .subscribe(data => this.retrievedThings = data, error => console.log(error));
    }

}
