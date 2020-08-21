import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUtils {
  /**
   * Get a number between 0 to max
   *
   * @param max number the maximum value of results
   */
  random(max: number, min: number = 0): number {
    let n = Math.floor(Math.random() * (max + 1));
    while (n < min) {
      n = this.random(max);
    }
    return n;
  }

  /**
   * Get a random string value from a string list
   *
   * @param list T[]
   */
  randomValueFrom<T>(list: Array<T>): T {
    const max = list.length - 1;
    const index = this.random(max);
    const value = list[index];
    return value;
  }

    /**
   * Get random values (a subset) from a string list
   *
   * @param list T[]
   * @param max the maximum length of the subset
   * @param min the minimum length of the subset
   */
  randomValuesFrom<T>(list: Array<T>, max: number = list.length, min: number = 0): Array<T> {
    const values = [];
    const length = this.random(max, min);
    for (let i = 0; i < length; i++) {
      const value = this.randomValueFrom(list);
      values.push(value);
    }
    // console.log(`randomValuesFrom() fetched ${values.length} / ${length} items (expects ${min} - ${max})`);
    return values;
  }


}
