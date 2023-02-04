import api_back from "../utils/api-back";

class NewsClass {
    _tipo = 'noticia';
    _enlace = '';
    _autor = '';
    _titular = '';
    _descripcion = '';

    constructor(enlace, autor, titular, descripcion) {
        this._enlace = enlace;
        this._autor = autor;
        this._titular = titular;
        this._descripcion = descripcion;
    }

    async registerNews() {
        await api_back.post(
            'registros/noticias/create',
            {
                "tipoPeticion": this._tipo,
                "enlace": this._enlace,
                "autor": this._autor,
                "titular": this._titular,
                "descripcion": this._descripcion,
            }
        ).then(
            response => { console.log(response.data); }
        ).catch(
            err => { console.log(err); }
        )
    }
}

export default NewsClass;