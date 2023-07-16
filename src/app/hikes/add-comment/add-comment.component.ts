import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HikeService } from '../hike.service';

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

    constructor(
        private route: ActivatedRoute,
        private hikeService: HikeService,
    ) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];        
    }

    onSubmit() {
        if (!this.form?.valid) {
            return;
        }

        if(this.form) {
            this.newComment = this.form.value.content;
        }
        
        this.hikeService.comment(this.postId, this.newComment).subscribe(response => {
            this.isCommentAdded = true;
            this.onCommentAdd.emit(this.isCommentAdded);
        });
    }
}
