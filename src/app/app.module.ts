import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { WalletComponent } from "./wallet/wallet.component";
import { TimerService } from "./timer.service";
import { BitcoinService } from "./bitcoin.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "bitcoin", component: BitcoinComponent },
      { path: "wallet", component: WalletComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavComponent,
    HomeComponent,
    BitcoinComponent,
    WalletComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, BitcoinService]
})
export class AppModule {}
