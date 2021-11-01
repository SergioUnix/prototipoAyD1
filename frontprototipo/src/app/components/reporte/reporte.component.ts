import { Component, OnInit, HostBinding  } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'; /// sierve para cuando guarde me redireccione a la vista games
import { Producto } from 'src/app/modelos/Producto';   //importo el tipo de dato,
import { Comentario } from 'src/app/modelos/Comentario';   //importo el tipo de dato,
import { Contador } from 'src/app/modelos/Contador'; 
import { Likes } from 'src/app/modelos/Like';     
import { DisLikes } from 'src/app/modelos/DisLikes';    
import {ProductoService} from '../../servicios/producto.service'; ///importo el servicio
import {UsuariosService} from '../../servicios/usuarios.service'; 
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';


//especial para reportes pdf
import { PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);

interface DataResponse{
  nombre1: string;
  nombre2: string;
  saldo: string;
}

type TableRow =[string,string,string,number,number,string,string];


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {



  async generate() {
    const pdf = new PdfMakeWrapper();
    pdf.add(this.createTable(this.arreglo));
    pdf.create().open();  

  }



createTable(Datos:any):ITable{
  [{}]
  return new Table([
    ['Id_bitacora', 'Descripcion', 'Tipo','Fecha','Id_usuario','Nombre','Apellido'],
    ...this.extractData(Datos)
  ]).width('*')  
  .layout({
    fillColor: (rowIndex: number, node:any,columnIndex: number)=>{
      return rowIndex === 0? '#CCCCCC' : '';
    }
  })
  .end;

}

extractData(Datos:any):TableRow[]{
  return Datos.map(row => [row.id_bitacora,row.descripcion,row.tipo,row.fecha_creacion,row.id_usuario,row.nombre,row.apellido]);
}



  @HostBinding('class') classes='row';  //necesario para desplegar un producto a la par de otro 
 
  public reporte1 = false;
  public reporte2 = false;
  public reporte3 = false;
  public reporte4 = false;
  public reporte5 = false;
  public reporte6 = false;
  public reporte7 = false;
  public reporte8 = false;
  public reporte9 = false;
  public reporte10 = false;



  arreglo: any=[];
 
  producto: Producto ={  
      id_producto: 0,
      producto: '',
      estado: '',
      fk_usuario: 0,
      precio: 0,
      detalle: '',
      fk_categoria: 0,
      foto: ''     
  };

  comentario:Comentario={
    id_comentario:  0,
    comentario: '',
    fk_producto:  0,
    fk_usuario:  0,
    fecha_creacion: ''
  };

  like: Likes ={  
    id_likes: 0,
    fecha_creacion: '',
    fk_producto:0,
    fk_usuario: 0
};
Dislike: DisLikes ={  
  id_Dislikes: 0,
  fecha_creacion: '',
  fk_producto:0,
  fk_usuario: 0
};


  constructor (private usuariosService: UsuariosService,private productosService: ProductoService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //sino esta logueado me redirecciona al login
    if(this.usuariosService.getSesionNombre()==''){    console.log("No Logeado --productos-lista");    this.router.navigate(['/login']); }






    const params =this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params.id){        //este params.id me detecta el numero
    
    if(params.id==1){    
      this.getReporte1();
    }

    
   }


  
   




  }


  getReporte1Descendente(){    
    let  id= this.usuariosService.getSesionCod();
    this.productosService.getReporte1Descendente().subscribe(  
      res => {
        this.arreglo = res;
        this.reporte1=true;
        console.log(this.arreglo);
      //  setTimeout(( ) =>{     location.reload();       } , 2000);
       },
      err => console.error(err)
    );
     }







  getReporte1(){    
    let  id= this.usuariosService.getSesionCod();
    this.productosService.getReporte1().subscribe(  
      res => {
        this.arreglo = res;
        this.reporte1=true;
        //setTimeout(( ) =>{     location.reload();       } , 2000);
       },
      err => console.error(err)
    );
     }





//refrescar la pagina

refrescar(){
  location.reload();

}




}
