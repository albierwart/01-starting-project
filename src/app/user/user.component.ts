import { Component, computed, Input, input } from '@angular/core';//input est une fction


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// cette propriete  est settable from outside grace a input
  //@Input({required: true}) avatar!: string; //!= on dit a typescript que l on est sur que la valeur sera un string mm si ca n a pas l air logique
  //@Input({required: true}) name!: string;


  avatar = input.required<string>();//  readonly
  name = input.required<string>();

 /* get imagePath(){
    return 'assets/users/' + this.avatar
  }*/

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
    onSelectUser(){
  }

}
