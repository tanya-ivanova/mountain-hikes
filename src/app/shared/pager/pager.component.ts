import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.css']
})
export class PagerComponent {
    @Input() page: number | undefined;
    @Input() totalPages: number | undefined;
    @Input() navigateTo: string | undefined;
    @Input() hasSearchResults: boolean | undefined;
    @Input() searchValue: string | undefined;

    constructor(
        private router: Router,
    ) { }

    onPagePrev() {
        if (this.page! > 1) {
            this.page! -= 1;

            if (this.hasSearchResults) {
                this.router.navigate(['/search'], { queryParams: { search: this.searchValue, page: this.page } });
            } else {
                this.router.navigate([this.navigateTo], { queryParams: { page: this.page } });
            }
        }
    }

    onPageNext() {
        if (this.page! < this.totalPages!) {
            this.page! += 1;
            
            if (this.hasSearchResults) {
                this.router.navigate(['/search'], { queryParams: { search: this.searchValue, page: this.page } });
            } else {
                this.router.navigate([this.navigateTo], { queryParams: { page: this.page } });
            }
        }
    }
}
