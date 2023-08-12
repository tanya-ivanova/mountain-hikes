import { Component, OnInit } from '@angular/core';
import { HikeService } from '../hike.service';
import { Hike } from '../../types/Hike';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchValue = '';
    posts: Hike[] = [];
    isLoading = false;
    isSearchedHikes = true;
    isInitial: boolean = false;

    page: number = 1;
    totalPostsCount: number = 0;
    totalPages: number = 0;
    pageSize = 3;
    hasSearchResults = false;

    constructor(
        private hikeService: HikeService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe((queryParams) => {
                this.searchValue = queryParams['search'];
                this.page = Number(queryParams['page']) || 1;

                this.hikeService.search(this.searchValue, this.page)
                    .subscribe(hikeData => {
                        this.posts = hikeData.posts;
                        if(this.posts.length > 0) {
                            this.hasSearchResults = true;
                        } else {
                            this.hasSearchResults = false;
                        }

                        this.totalPostsCount = hikeData.count;
                        this.totalPages = Math.ceil(this.totalPostsCount / this.pageSize);

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
