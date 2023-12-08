import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
