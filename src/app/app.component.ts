import {Component, OnInit} from '@angular/core';
import {CurdService} from './services/curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist';
  members: { isedit: boolean; name: unknown; mobile: unknown; id: string; age: unknown; email: unknown }[];

  constructor(public curdService: CurdService) {
  }

  // tslint:disable-next-line:typedef
  addFamilyMember() {
    const Record = {
      Name: 'Mehanaz Khan',
      Age: '25',
      Mobile: 1112223334,
      Email: 'Demo@demo.com'
    };
    this.curdService.addNewFamilyMember(Record).then(res => {

    });
  }

  ngOnInit(): void {
    this.curdService.getAllFamily().subscribe(data => {
      this.members = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['Name'],
          age: e.payload.doc.data()['Age'],
          mobile: e.payload.doc.data()['Mobile'],
          email: e.payload.doc.data()['Email'],
        };
      });
    });
  }

}
