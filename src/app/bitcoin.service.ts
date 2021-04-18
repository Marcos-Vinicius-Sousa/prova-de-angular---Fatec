import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    BRL: {
      code: string;
      rate: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  constructor(private http: HttpClient) {}

  currentResponse: Response;
  updateList: Array<Response> = [];
  public msg: string = "";

  update() {
    this.http
      .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .subscribe(data => {
        if (!this.currentResponse) {
          this.updateList.push(data);
        } else if (
          data.bpi.BRL.rate_float !== this.currentResponse.bpi.BRL.rate_float
        ) {
          this.updateList.push(data);
          if (
            data.bpi.BRL.rate_float <this.currentResponse.bpi.BRL.rate_float
          ) {
            this.msg = "caiu";
          } else if (
            data.bpi.BRL.rate_float >this.currentResponse.bpi.BRL.rate_float
          ) {
            this.msg = "subiu";
          }
        }
        this.currentResponse = data;
      });
  }

  getMsg() {
    return this.msg;
  }
}
