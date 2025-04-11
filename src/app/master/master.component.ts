import { Component } from '@angular/core';
import { RolesComponent } from '../components/roles/roles.component';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from '../components/designation/designation.component';

@Component({
  selector: 'app-master',
  imports: [RolesComponent,DesignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  tabSelected: string='';

  selectedTab(tabName: string){
    this.tabSelected=tabName;
  }

  
}
