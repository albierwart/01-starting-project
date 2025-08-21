import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// cette propriete  est settable from outside
  @Input() avatar!: string; //!= on dit a typescript que l on est sur que la valeur sera un string mm si ca n a pas l air logique
  @Input() name!: string;
  
  onSelectUser(){
    
  }

}
