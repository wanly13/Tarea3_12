import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../_services/comida.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  
  menus = [
    {
        Nombre_del_Plato: "",
        precio: 0,
        create_date: "",
        modified_date: ""
    }
  ]
  constructor(
    private ComidaService:ComidaService
  ) { }

  ngOnInit(): void {
    this.ComidaService.getMenu().subscribe((data)=>{
      this.menus = data;
    })
  }

}
