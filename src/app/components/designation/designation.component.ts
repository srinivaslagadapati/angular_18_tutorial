import { Component, inject, OnInit } from '@angular/core';
import { MasterComponent } from '../../master/master.component';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignaion } from '../../model/inteface/IRoles';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignaion[]=[] ;
  masterService= inject(MasterService);
  isLoader:boolean = true;

  ngOnInit(): void {
    
    this.masterService.gerDesignationList().subscribe((result: APIResponseModel)=>{
      this.designationList= result.data;
      this.isLoader = false;
    },error=>{
      alert("API error");
      this.isLoader = false;
    })
  }
}
