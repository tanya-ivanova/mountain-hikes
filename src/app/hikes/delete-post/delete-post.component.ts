import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HikeService } from '../hike.service';
import { ErrorService } from 'src/app/shared/error/error.service';

@Component({
    selector: 'app-delete-post',
    templateUrl: './delete-post.component.html',
    styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
    postId = '';
    isLoading: boolean = false;
    apiError: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hikeService: HikeService,
        private errorService: ErrorService,
    ) { }

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];
    }

    onDelete() {
        this.errorService.removeError();
        this.errorService.apiError$.subscribe((err) => {
            this.apiError = err || '';
        });

        this.isLoading = true;

        this.hikeService.delete(this.postId).subscribe({
            next: () => {
                this.isLoading = false;
                this.router.navigate(['/hikes']);
            },
            complete: () => {
                this.isLoading = false;
            }
        })
    }

    onClose() {
        this.router.navigate(['/hikes', this.postId, 'details']);
    }
}
