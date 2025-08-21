import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';//input est une fction


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
  @Input({required: true}) id!: string;

  avatar = input.required<string>();//  readonly
  name = input.required<string>();
  @Output() select = new EventEmitter();


 /* get imagePath(){
    return 'assets/users/' + this.avatar
  }*/

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
    onSelectUser(){
      this.select.emit(this.id);
  }

}
