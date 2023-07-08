import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../types/Post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchValue = '';
    posts: Post[] = [];
    isLoading = false;
    isSearchedHikes = true;
    isInitial: boolean = false;

    constructor(
        private postService: PostService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe((queryParams) => {
                this.searchValue = queryParams['search'];

                this.postService.search(this.searchValue)
                    .subscribe(posts => {
                        this.posts = posts;
                        this.isLoading = false;
                    })

                if (this.searchValue === undefined) {
                    this.isInitial = true;
                }
            })
    }

    onSearch() {
        this.isLoading = true;
        if (this.searchValue !== '' && this.searchValue !== undefined) {
            this.router.navigate(['/search'], { queryParams: { search: this.searchValue } });
        } else {
            this.router.navigate(['/search']);
            this.isLoading = false;
        }

        this.isInitial = false;
    }
}
