import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { storage } from 'src/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { HikeService } from '../hike.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
    constructor(
        private hikeService: HikeService,
        private router: Router,
    ) {}

    @ViewChild('f') form: NgForm | undefined;    
    photos: string[] = [];
    newHike: {
        name: string;
        mountain: string;
        country: string;
        duration: string;
        description: string;
        latitude: string;
        longitude: string;
        photos: string[];
    } = {
        name: '',
        mountain: '',
        country: '',
        duration: '',
        description: '',
        latitude: '',
        longitude: '',
        photos: [],
    };

    onFilesSelected(event: any) {
        console.log(event.target?.files);        

        for (const file of event.target?.files) {
            const storageRef = ref(storage, file.name)

            uploadBytes(storageRef, file).then(snapshot => {
                getDownloadURL(storageRef).then(url => {
                    this.photos.push(url);
                });
            })
        }
    }

    onSubmit() {
        if (!this.form?.valid) {
            return;
        } 

        this.newHike.name = this.form?.value.name;
        this.newHike.mountain = this.form?.value.mountain;
        this.newHike.country = this.form?.value.country;
        this.newHike.duration = this.form?.value.duration;
        this.newHike.description = this.form?.value.description;
        this.newHike.latitude = this.form?.value.latitude;
        this.newHike.longitude = this.form?.value.longitude;
        this.newHike.photos = this.photos;

        this.hikeService.createPost(this.newHike).subscribe(() => {
            this.router.navigate(['/hikes']);
        })

        this.form?.reset();
    }
}
