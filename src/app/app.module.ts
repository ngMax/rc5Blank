import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
@NgModule({
    declarations:[AppComponent, OtherComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule {}