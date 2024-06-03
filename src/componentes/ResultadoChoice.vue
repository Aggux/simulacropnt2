<template>
<section class="src-componentes-atributos">
    <div class="jumbotron">
  
    <h2>Resultados Choice</h2>
     <hr>

     <div class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Número de pregunta</th>
          <th>Respuesta</th>
        </tr>
          <td>
            1
          </td>
          <td>
            a
          </td>
        <tr>
          </tr>
          <td>
            2
          </td>
          <td>
            c
          </td>
        <tr>
          </tr>
          <td>
            3
          </td>
          <td>
            b
          </td>
        <tr>
        </tr>
      </table>
    </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-resultado-choice',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: blueviolet;
    color: white;
  }

h2 {
    color: white;
}

hr {
    background-color: #eee;
}

label {
    text-transform: capitalize;
}

pre {
    color: white;
}
</style>
