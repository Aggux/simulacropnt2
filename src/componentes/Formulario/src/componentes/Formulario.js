
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      clientes: [
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
      return !this.formData.nombre || 
      !this.formData.documento || 
      !this.formData.montoAPagar || 
      !this.formData.pagoRealizado
    },
    enviar() {
      const cliente = {...this.formData}
      cliente.fecha = new Date().toLocaleString()


      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    },
    agregarCliente(nom, doc, montoAPag, pagoRealiz) {
      const cliente = { nombre: nom, documento: doc, montoAPagar: montoAPag, pagoRealizado: pagoRealiz, deuda: montoAPag-pagoRealiz, fecha:  new Date().toLocaleString()}
      this.clientes.push(cliente)
    },
    analizarSaldo(gasto) {
      let dif = gasto.pagoRealizado - gasto.montoAPagar
      let color = '#080'
      if(dif > 0) color = '#00F'
      if(dif < 0) color = '#F00'
      return {
        valor : dif,
        color
      }
    },
  }
}


