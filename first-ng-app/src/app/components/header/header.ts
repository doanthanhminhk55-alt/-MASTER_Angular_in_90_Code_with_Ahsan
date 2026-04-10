import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todos';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'My first Angular'
  title_signal = signal('My first Angular Signal')
}
