import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
    @ViewChild('f') form: NgForm | undefined; 
    updatedHike: {
        name: string;
        mountain: string;
        country: string;
        duration: string;
        description: string;
        latitude: string;
        longitude: string;        
    } = {
        name: '',
        mountain: '',
        country: '',
        duration: '',
        description: '',
        latitude: '',
        longitude: '',        
    };

    postId = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];
    }

    onSubmit() {      
        this.updatedHike.name = this.form?.value.name;
        this.updatedHike.mountain = this.form?.value.mountain;
        this.updatedHike.country = this.form?.value.country;
        this.updatedHike.duration = this.form?.value.duration;
        this.updatedHike.description = this.form?.value.description;
        this.updatedHike.latitude = this.form?.value.latitude;
        this.updatedHike.longitude = this.form?.value.longitude;        

        console.log(this.updatedHike);

        this.form?.reset();
    }
}
