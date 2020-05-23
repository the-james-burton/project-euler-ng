import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EulerService {

  constructor(private ZONE: NgZone) {}

  getServerSentEvent(url: string): Observable<any> {
    return new Observable(observer => {
      const eventSource = this.getEventSource(url);
      eventSource.onmessage = event => {
        this.ZONE.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this.ZONE.run(() => {
          observer.error(error);
        });
      };
    });
  }
  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }}
