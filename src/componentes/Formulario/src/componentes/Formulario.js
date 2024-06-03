
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      clientes: [
        { nombre: 'Pedro', documento: '44830154', montoAPagar: 32, pagoRealizado: 12},
        { nombre: 'juan', documento: '44343015', montoAPagar: 254, pagoRealizado: 34},
      ],
      datos: []
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        documento: null,
        montoAPagar: null,
        pagoRealizado: null,
      }
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre || 
        this.formData.nombre.length < 3 || 
        this.formData.nombre.length > 10 
      ) || 
      !this.formData.documento || 
      !this.formData.montoAPagar || 
      !this.formData.pagoRealizado
    },
    enviar() {
      const datos = {...this.formData}
      console.log(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    },
    agregarCliente(nom, doc, montoAPag, pagoRealiz) {
      const cliente = { nombre: nom, documento: doc, montoAPagar: montoAPag, pagoRealizado: pagoRealiz}

      this.clientes.push(cliente)
    },
  }
}


