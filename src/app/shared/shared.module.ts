import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorComponent,
    ElapsedTimePipe,
    PagerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ErrorComponent,
    ElapsedTimePipe,
    PagerComponent,
  ]
})
export class SharedModule { }
