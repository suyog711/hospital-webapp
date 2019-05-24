import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgService } from './services/msg.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [MsgService]
})
export class SharedModule { }
