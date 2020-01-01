import {Thing} from '../domain/thing';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ThingService} from '../services/thing.service';

@Component({
    selector: 'app-thing-details',
    templateUrl: './thing-details.component.html',
    styleUrls: ['./thing-details.component.css']
})
export class ThingDetailsComponent implements OnInit {

    id: number;
    thing: Thing;

    constructor(private route: ActivatedRoute, private router: Router,
                private thingService: ThingService) {
    }

    ngOnInit() {
        this.thing = new Thing();

        this.id = this.route.snapshot.params['id'];

        this.thingService.getThing(this.id)
            .subscribe(data => {
                console.log(data);
                this.thing = data;
            }, error => console.log(error));
    }

    list() {
        this.router.navigate(['things']);
    }
}
