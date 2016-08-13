import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-other',
  template: `
    <p>
      the other Component!
    </p>
  `,
  styles: []
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
