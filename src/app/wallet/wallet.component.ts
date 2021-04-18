import { Component, OnInit } from "@angular/core";
import { BitcoinService } from "../bitcoin.service";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.css"]
})
export class WalletComponent implements OnInit {
  nt: number;
  saldR: number = 0;
  saldB: number = 0;
  constructor(
    public BitcoinService: BitcoinService,
    public TimerService: TimerService
  ) {
    this.TimerService.start();
    this.nt = 1;
  }

  getSaldoR() {
    return this.saldR;
  }
  getSaldoB() {
    return this.saldB;
  }

  comprar() {
    this.saldR = this.saldR + this.nt;
    this.saldB =
      this.saldB +
      this.nt * this.BitcoinService.currentResponse.bpi.BRL.rate_float;
  }

  vender() {
    this.saldR = this.saldR - this.nt;
    this.saldB =
      this.saldB -
      this.nt * this.BitcoinService.currentResponse.bpi.BRL.rate_float;
  }

  ngOnInit() {}
}
