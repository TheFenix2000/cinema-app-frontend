import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Cinema App';
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
