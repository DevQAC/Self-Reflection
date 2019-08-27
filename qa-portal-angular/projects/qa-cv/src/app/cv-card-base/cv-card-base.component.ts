import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IFeedback } from '../_common/models/feedback.model';

import * as moment from 'moment';
import { FormControl } from '@angular/forms';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-cv-card-base',
  templateUrl: './cv-card-base.component.html',
  styleUrls: ['./cv-card-base.component.scss']
})
export class CvCardBaseComponent implements OnInit {
  @Input() title: string;
  @Input() feedback: IFeedback[];
  @Output() feedbackChange = new EventEmitter<IFeedback[]>();
  @Input() showOpenButton: boolean = true;
  @ViewChild('bottomScrollTarget', { static: true }) bottomScrollTarget: ElementRef;
  @ViewChild('drawer', {static: true}) public drawer: MatDrawer;

  public commentInput = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  getFormattedDate(date: string): string {
    return moment(date).fromNow();
  }

  getFullDate(date: string): string {
    return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
  }


  addFeedbackItem() {
    const fb: IFeedback = {
      comment: this.commentInput.value,
      date: moment().format(),
      reviewer: 'ME'
    };
    this.feedback.push(fb);
    this.feedbackChange.emit(this.feedback);
    this.commentInput.reset();

    setTimeout(() => {
      // this.bottomScrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}