import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UsernameFieldComponent } from './username-field/username-field.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { ThirdTaskCountComponent } from './third-task-count/third-task-count.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameFieldComponent,
    ThirdTaskComponent,
    ThirdTaskCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
