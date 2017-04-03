import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listado : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
    this.listado=this.database.list('/movies');
    this.listado.push({
      title:'Buscando a Nemo',
      opinion:'Pinche nemo guapo',
      ranking: '10/5'
    });
    this.listado.push({
      title:'Mi villano favorito',
      opinion:'Petete',
      ranking: '4/5'
    });
    this.listado.push({
      title:'Monsters Inc',
      opinion:'...',
      ranking: '4/5'
    });
    
  }

}
