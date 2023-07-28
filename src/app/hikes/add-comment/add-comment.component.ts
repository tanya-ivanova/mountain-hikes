import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HikeService } from '../hike.service';
import { ErrorService } from 'src/app/shared/error/error.service';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
    @ViewChild('f') form: NgForm | undefined;
    newComment = '';
    postId = '';
    isCommentAdded: boolean = false;
    @Output() onCommentAdd = new EventEmitter<boolean>;

    isLoading: boolean = false;
    apiError: string = '';

    constructor(
        private route: ActivatedRoute,
        private hikeService: HikeService,
        private errorService: ErrorService,
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];        
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

        if(this.form) {
            this.newComment = this.form.value.content;
        }
        
        this.hikeService.comment(this.postId, this.newComment).subscribe({
            next: (response) => {
                this.isLoading = false;
                this.isCommentAdded = true;
                this.onCommentAdd.emit(this.isCommentAdded);
            },
            complete: () => {
                this.isLoading = false;                
            }
        });
    }
}
