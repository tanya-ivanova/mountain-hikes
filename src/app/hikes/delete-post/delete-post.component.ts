import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HikeService } from '../hike.service';

@Component({
    selector: 'app-delete-post',
    templateUrl: './delete-post.component.html',
    styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {  
    postId = '';
    isLoading: boolean = false;
    errorMessage: string = '';

    constructor( 
        private route: ActivatedRoute,       
        private router: Router,
        private hikeService: HikeService,        
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];
    }

    onDelete() {
        this.isLoading = true;
        
        this.hikeService.delete(this.postId).subscribe(
            () => {
                this.isLoading = false;            
                this.router.navigate(['/hikes']);
            },
            error => {
                this.isLoading = false;
                this.errorMessage = error.error.message;
            }
        )
    }

    onClose() {
        this.router.navigate(['/hikes', this.postId, 'details']);
    }
}
