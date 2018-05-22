import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  @Input()
  loading: boolean;

  constructor() {
  }
  
}
