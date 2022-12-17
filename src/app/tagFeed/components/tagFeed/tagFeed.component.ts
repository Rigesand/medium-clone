import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: 'tagFeed.component.html',
  styleUrls: ['tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  tagName: string
  apiUrl: string

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
