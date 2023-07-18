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

    constructor( 
        private route: ActivatedRoute,       
        private router: Router,
        private hikeService: HikeService,        
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];
    }

    onDelete() {
        this.hikeService.delete(this.postId).subscribe(() => {            
            this.router.navigate(['/hikes']);
        })
    }

    onClose() {
        this.router.navigate(['/hikes', this.postId, 'details']);
    }
}
