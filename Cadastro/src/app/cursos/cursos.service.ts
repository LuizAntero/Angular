import { Injectable } from '@angular/core';
import { Curso } from './curso';


//O Injetable é um direcionador do local onde está o serviço
//Neste caso, não vamos restringir e deixar "root"
@Injectable({
  providedIn: 'root'
})

//Classe
export class CursosService {

  //Contrutor. É onde já vamos ter elementos exibidos de primeira mão
  constructor() { }

  //Vetor de cursos
  private vetorCursos:Curso[] = [
    new Curso("Angular", 800, "Desenvolvimento"),
    new Curso("PHP", 590, "Desenvolvimento"),
    new Curso("Photoshop", 470, "Design")
  ];

  //Cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }

  //Seleção de cursos
  public listar(){
    return this.vetorCursos;
  }

  //Alteração de cursos
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }

  //Exclusão de cursos
  public excluir(id:number){
    this.vetorCursos.splice(id, 1);
  }
  
}
