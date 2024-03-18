import { Component, OnInit } from '@angular/core';
import { InfinitescrolldataService } from '../services/infinitescrolldata.service';
 
@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {
 
  items: any[] = [];
  nombre: string = '';
  categoria: string = '';
  proovedor: string = '';
  precio: string = '';
  cantidad: string = '';
  idStock: string = '';
 
  constructor(private infiniteScrollData: InfinitescrolldataService) { }
 
  ngOnInit() {
    this.generarItems();
  }
 
  generarItems() {
    for (let i = 0; i < 50; i++) {
      this.items.push({ hora: "" + Math.floor(Math.random() * 23) + ":" + Math.floor(Math.random() * 59) });
    }
  }
 
  onIonInfinite(event: any) {
    this.generarItems();
  }
 
  limpiarFormulario() {
    this.nombre = '';
    this.categoria = '';
    this.proovedor = '';
    this.precio = '';
    this.cantidad = '';
    this.idStock = '';
  }
 
  async obtenerDatos() {
    this.items = await this.infiniteScrollData.request_Data();
  }
 
  async guardar() {
    const datos = {
      nombre: this.nombre,
      categoria: this.categoria,
      proovedor: this.proovedor,
      precio: this.precio,
      cantidad: this.cantidad,
      idStock: this.idStock
    };
    try {
      const respuesta = await this.infiniteScrollData.upload_Data(datos, this.idStock);
      if (respuesta) {
        this.limpiarFormulario();
        console.log('Correcto');
        // mandar mensaje
        // this.updateListElements();
      } else {
        console.error('Falló la carga de datos.');
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }
 
}

//npm install -g firebase-tools
//ionic build --prood
//cd www
//firebase login
//n
//en google dise que si y despues lo permite todo
//firebase init
//configuramos la de hosting configure files for firebase
//despues selecionamos use an existing
//despues seleccionamos nuestro proyecto
// director publico y ponemos ./
//despues pregunta single-page y selecionamos que si osea:   y
//githup damos que no:  n
//sobre escribir le damos que no : n
//firebase deploy --only hosting
//



//npx cap copy android
//

//ionic serve

//si quiere que queremos re escribir el index :  n
//