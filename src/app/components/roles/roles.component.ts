import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/inteface/IRoles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  roleList: IRole[]=[];
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.roleList= res.data;
    })
  }
  // firstName: String= "Sri";
  // lastName ="L";
  // Age : number = 32;
  // todayDate : Date = new Date();
  // typeBox: string="checkbox";
  // selectState: string="";
  // showMessage1() {
  //   console.log("message")
  //   alert("test")
  // }
  // showMessage(message:string) {
  //   console.log(message)
  //   alert(message)
  // }
}
