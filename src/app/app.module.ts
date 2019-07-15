import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HereMapComponent } from './components/here-map/here-map.component';
import { QuarterGridComponent } from './layouts/quarter-grid/quarter-grid.component';
import { KpiCardsComponent } from './components/kpi-cards/kpi-cards.component';
import { HeroThirdsComponent } from './layouts/hero-thirds/hero-thirds.component';
import { TwoAndOneComponent } from './layouts/two-and-one/two-and-one.component';
import { SplitCenteredComponent } from './layouts/split-centered/split-centered.component';
import { SplitColumnsComponent } from './layouts/split-columns/split-columns.component';
import { HeroSidebarComponent } from './layouts/hero-sidebar/hero-sidebar.component';
import { SplitRowsComponent } from './layouts/split-rows/split-rows.component';
import { ThirdsGridComponent } from './layouts/thirds-grid/thirds-grid.component';
@NgModule({
    declarations: [
        AppComponent,
        HereMapComponent,
        QuarterGridComponent,
        KpiCardsComponent,
        HeroThirdsComponent,
        TwoAndOneComponent,
        SplitCenteredComponent,
        SplitColumnsComponent,
        HeroSidebarComponent,
        SplitRowsComponent,
        ThirdsGridComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
