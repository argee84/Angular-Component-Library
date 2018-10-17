import {
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';
import { } from 'angular-star-rating';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'beart-star-rating',
  templateUrl: './beart-star-rating.component.html',
  styleUrls: ['./beart-star-rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BeartStarRatingComponent implements OnInit {

  private _ratingInput: string;
  private _actualRating: string;
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;
  onRatingChangeResult: RatingChangeEvent;

  constructor() {
    this._ratingInput = '0';
    this._actualRating = '0';
  }

  ngOnInit() {
    this._actualRating = this._ratingInput;
  }

  onClick = ($event: ClickEvent) => {
    // console.log('onClick $event: ', $event);
    this.onClickResult = $event;

    this._ratingInput = this.onClickResult.rating.toString();
    this._actualRating = this._ratingInput;
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    // console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;

    this._ratingInput = this.onRatingChangeResult.rating.toString();
  }

  onHoverRatingChange = ($event: HoverRatingChangeEvent) => {
    // console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;

    if (this.onHoverRatingChangeResult.hoverRating) {
      this._ratingInput = this.onHoverRatingChangeResult.hoverRating.toString();
    } else {
      this._ratingInput = this._actualRating;
    }
  }
}
