import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

public class produtos: Produto[] = [];

constructor(private _produtoService:ProdutoService){}
  ngOnInit(): void {
    this.listarProdutos();
  }



  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      (      retornaProduto: any) =>{
      }
      )
    }
  }
