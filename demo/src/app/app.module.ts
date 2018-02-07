import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {TabsModule, ButtonsModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {SelectSectionComponent} from './components/select-section';
import {ChildrenDemoComponent} from './components/select/children-demo';
import {MultipleDemoComponent} from './components/select/multiple-demo';
import {NoAutoCompleteDemoComponent} from './components/select/no-autocomplete-demo';
import {RichDemoComponent} from './components/select/rich-demo';
import {SingleDemoComponent} from './components/select/single-demo';
import {SampleSectionComponent} from './components/sample-section.component';

// import {NgxSelectModule} from '../../../src';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
    declarations: [
        AppComponent,
        SampleSectionComponent,
        SelectSectionComponent,
        ChildrenDemoComponent,
        MultipleDemoComponent,
        NoAutoCompleteDemoComponent,
        RichDemoComponent,
        SingleDemoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSelectModule,
        TabsModule.forRoot(),
        ButtonsModule.forRoot(),
        CommonModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
