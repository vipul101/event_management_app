import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  id = 0;
  event:any;
  constructor(private route:ActivatedRoute, private dbService:DbService){
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(this.id = params['id']);
      this.dbService.getEventById(this.id).then(value=>{
        this.event = value;
        console.log(value);
      }).catch(e=>{
        console.log(e);
      })
  })

  }
}
