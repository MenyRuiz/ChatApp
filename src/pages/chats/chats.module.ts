import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsPage } from './chats';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    ChatsPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(ChatsPage),
  ],
})
export class ChatsPageModule {}
