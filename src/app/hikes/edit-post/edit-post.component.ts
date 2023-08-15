import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HikeService } from '../hike.service';

import { Hike } from 'src/app/types/Hike';
import { ErrorService } from 'src/app/shared/error/error.service';

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
        createdAt: '',
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

    isLoading: boolean = false;
    apiError: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hikeService: HikeService,
        private fb: FormBuilder,
        private errorService: ErrorService,
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
        this.errorService.removeError();
        this.errorService.apiError$.subscribe((err) => {
            this.apiError = err || '';
        });

        this.isLoading = true;

        this.updatedHike.name = this.form.get('name')?.value || '';
        this.updatedHike.mountain = this.form.get('mountain')?.value || '';
        this.updatedHike.country = this.form.get('country')?.value || '';
        this.updatedHike.duration = this.form.get('duration')?.value || '';
        this.updatedHike.description = this.form.get('description')?.value || '';
        this.updatedHike.latitude = this.form.get('latitude')?.value || '';
        this.updatedHike.longitude = this.form.get('longitude')?.value || '';

        this.hikeService.updatePost(this.postId, this.updatedHike).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.router.navigate(['/hikes', this.postId, 'details'])
            },
            complete: () => {
                this.isLoading = false;
            }
        })

        this.form?.reset();
    }

    onCancel() {
        this.router.navigate(['/hikes', this.postId, 'details']);
    }
}
