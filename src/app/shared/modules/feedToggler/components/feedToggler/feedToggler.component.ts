import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {isLoggedInSelector} from '../../../../../auth/store/selectors'

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: 'feedToggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  constructor(private store: Store) {}

  @Input('tagName') tagNameProps: string | null
  isLoggedIn$: Observable<boolean>

  ngOnInit(): void {
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
