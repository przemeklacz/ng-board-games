import { ModalContent } from './../../models/modal-content';
import { ActionsGameComponent } from './../actions-game/actions-game.component';
import { GameFormComponent } from './../game-form/game-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit, ModalContent {

  data: any;
  dialogRef: any;

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.dialogRef.close();
  }

}
