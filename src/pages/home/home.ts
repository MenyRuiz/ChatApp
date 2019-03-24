import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { ChatsPage } from '../chats/chats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userName: string = "";
  
  constructor(public navCtrl: NavController) {  

  }
  public entrar(){
    this.navCtrl.setRoot(ChatsPage, {userName:this.userName});
  }
}
