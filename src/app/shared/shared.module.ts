import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorComponent,
    ElapsedTimePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ErrorComponent,
    ElapsedTimePipe,]
})
export class SharedModule { }
