import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgAisFooterModule } from "../footer/footer.module";
import { NgAisHeaderModule } from "../header/header.module";
import { NgAisClearAll } from "./clear-all";

@NgModule({
  declarations: [NgAisClearAll],
  entryComponents: [NgAisClearAll],
  exports: [NgAisClearAll],
  imports: [CommonModule, NgAisHeaderModule, NgAisFooterModule]
})
export class NgAisClearAllModule {}
