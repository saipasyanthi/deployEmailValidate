import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="Welcome";
  tittle: any;
  constructor(private ar : ActivatedRoute) { 
    this.tittle = this.ar.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}

