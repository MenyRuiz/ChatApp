import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  @ViewChild("content") content: any;
  userName: string = "";
  message: string = "";
  messages = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.userName = navParams.get('userName');
this.getMessages();
  }
  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
      this.scrollToBottom();
    });
  }
  scrollToBottom(){
    var contentEnd = document.getElementById("content-end").offsetTop;
    this.content.scrollTo(0, contentEnd, 100);
  }
  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.userName });
    this.message = "";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
}