import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { EulerService } from '../euler.service';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private solutions: Array<Observable<number>> = [];

  constructor(private eulerService: EulerService) {
    const solutionsLength: number = this.solutions.push(
      eulerService
        .getServerSentEvent('http://localhost:8080/euler/smoke')
        .pipe(pluck('data'))
    );
    console.log(solutionsLength);
  }

  getSolutionForProblem(problem: number): Observable<number> {
    console.log('getSolutionForProblem:' + problem);
    return this.solutions[problem - 1];
  }
}
