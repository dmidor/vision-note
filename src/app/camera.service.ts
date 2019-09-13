import { Injectable } from '@angular/core';
import { NgOpenCVService } from 'ng-open-cv';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private ngOpenCVService: NgOpenCVService) {
  }

  public capture(): void {
  }

}
