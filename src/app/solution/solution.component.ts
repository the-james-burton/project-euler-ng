import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SolutionComponent implements OnInit, OnDestroy {
  @Input()
  problem: number;

  solution$: Observable<number>;
  solution: Array<number> = [];
  subscription: Subscription;

  constructor(private store: StoreService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('problem: ' + this.problem);

    this.solution$ = this.store.getSolutionForProblem(this.problem);
    this.subscription = this.solution$.subscribe((data) => {
      this.solution.push(data);
      this.changeDetection.markForCheck();
    });
  }

  trackByItem(index: number, item: number) {
    return index;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
