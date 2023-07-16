import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
    @ViewChild('f') form: NgForm | undefined;
    newComment = '';
    postId = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.postId = this.route.snapshot.params['id'];        
    }

    onSubmit() {
        if (!this.form?.valid) {
            return;
        }
        
        this.newComment = this.form?.value.content;        
    }
}
