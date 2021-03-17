
export class Todo{

  static fromJson( { id,tarea,completado,creado } ){

    const temptodo = new Todo( tarea );
    temptodo.id         = id;
    temptodo.tarea      = tarea;
    temptodo.completado = completado;
    temptodo.creado     = creado;

    return temptodo;
  }

  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }
}