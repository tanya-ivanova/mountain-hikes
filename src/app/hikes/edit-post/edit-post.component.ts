import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HikeService } from '../hike.service';

import { Hike } from 'src/app/types/Hike';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
    post: Hike = {
        name: '',
        mountain: '',
        country: '',
        duration: '',
        description: '',
        latitude: '',
        longitude: '',
        photos: [],
        _id: '',
        likes: [],
        comments: [],
        _ownerId: {
            _id: '',
            email: '',
        },
    };

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

    form = this.fb.group({
        name: ['', [
            Validators.required,
            Validators.minLength(3),
        ]
        ],
        mountain: ['', [
            Validators.required,
            Validators.minLength(3),
        ]
        ],
        country: ['', [
            Validators.required,
            Validators.minLength(3),
        ]
        ],
        duration: ['', [
            Validators.required,
            Validators.minLength(2),
        ]
        ],
        latitude: ['', [
            Validators.required,
        ]
        ],
        longitude: ['', [
            Validators.required,
        ]
        ],
        description: ['', [
            Validators.required,
            Validators.minLength(10),
        ]
        ],
    });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hikeService: HikeService,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.post = this.route.snapshot.data['post'];
        this.postId = this.route.snapshot.params['id'];

        this.form.setValue({
            name: this.post.name,
            mountain: this.post.mountain,
            country: this.post.country,
            duration: this.post.duration,
            description: this.post.description,
            latitude: this.post.latitude,
            longitude: this.post.longitude,
        });
    }

    onSubmit() {
        if (!this.form?.valid) {
            return;
        }

        this.updatedHike.name = this.form.get('name')?.value || '';
        this.updatedHike.mountain = this.form.get('mountain')?.value || '';
        this.updatedHike.country = this.form.get('country')?.value || '';
        this.updatedHike.duration = this.form.get('duration')?.value || '';
        this.updatedHike.description = this.form.get('description')?.value || '';
        this.updatedHike.latitude = this.form.get('latitude')?.value || '';
        this.updatedHike.longitude = this.form.get('longitude')?.value || '';

        this.hikeService.updatePost(this.postId, this.updatedHike).subscribe(response => {
            this.router.navigate(['/hikes', this.postId, 'details'])
        })

        this.form?.reset();
    }
}
