import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import {Produto} from '../models/Produto.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

public produtos: Produto[] = [];

constructor(private _produtoService:ProdutoService){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {

    this._produtoService.getProdutos().subscribe(
      (retornaProduto: Produto[]) =>{
        this.produtos = retornaProduto;
      }
      )
    }
  }
