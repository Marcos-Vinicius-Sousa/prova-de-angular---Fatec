import { Injectable } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Injectable()
export class TimerService {
  constructor(public BicoinService: BitcoinService) {}

  private time: any;
  private counterS: number = 0;

  start() {
    this.BicoinService.update();
    if (!this.time) {
      this.time = setInterval(() => {
        this.counterS++;
        if (this.counterS == 60) {
          this.BicoinService.update();
          this.counterS = 0;
        }
      }, 1000);
    }
  }
}
