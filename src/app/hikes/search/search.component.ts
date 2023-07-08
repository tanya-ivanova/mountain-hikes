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

    constructor(
        private hikeService: HikeService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe((queryParams) => {
                this.searchValue = queryParams['search'];

                this.hikeService.search(this.searchValue)
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
