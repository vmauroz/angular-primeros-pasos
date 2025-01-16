import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";


@NgModule ( {
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent


    ],
    imports: [
        CommonModule

    ]
}

)
export class HerosModule {};
