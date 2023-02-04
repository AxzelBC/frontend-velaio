import api_back from "../utils/api-back";

class TimeClass {
    _tipo = 'tiempo';
    _enlace = '';
    _humedad = 0;
    _temp = 0;
    _ciudad = 'Santiago de Cali'

    constructor(enlace, humedad, temp) {
        this._enlace = enlace;
        this._humedad = humedad;
        this._temp = temp;
    }

    async registerTime() {
        await api_back.post(
            'registros/tiempo/create',
            {
                "tipoPeticion": this._tipo,
                "enlace": this._enlace,
                "humedad": this._humedad,
                "temp": this._temp,
                "ciudad": this._ciudad
            }
        ).then(
            response => { console.log(response.data); }
        ).catch(
            err => { console.log(err); }
        )
    }
}

export default TimeClass;