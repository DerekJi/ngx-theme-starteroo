import { Injectable } from '@angular/core';
import { RandomUtils } from '@core/utils/random.utils';

@Injectable({
  providedIn: 'root'
})
export class MockUtils {

  constructor(
    private random: RandomUtils,
  ) {

  }
}
