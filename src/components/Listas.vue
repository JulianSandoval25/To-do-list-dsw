<template>
    <div class="app">
        <div class="container">
            <div class="header">
            <h2>Listas de Tareas</h2>
            <div class="add-button-container">
                <div @click="verAgregar" class="add-button">Nueva Lista</div>
            </div>
            </div>
            <div class="crearListas" v-if="crearLista">
                <AgregarLista @nueva-lista="agregarNuevaLista"/>
            </div>

            <div class="lista" v-for="(list, index) in listas" :key="index">
                 <div @click="verLista(index)">{{ list.nombre }}</div>
            </div>

        
            <!-- <ul>
            <li v-for="(lista, index) in listas" :key="index">
                <router-link :to="'/lista/' + index">{{ lista.nombre }}</router-link>
            </li>
            </ul>
            <router-view :listas="listas"></router-view> -->
            <div v-if="mostrarTarea">
                <Tareas :lista="listaSeleccionada" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import AgregarLista from './AgregarLista.vue';
    import Tareas from './Tareas.vue';
    let mostrarTarea = ref(false);
    let crearLista = ref(false);
    let listas=ref([
    { id: 1, nombre: 'Facultad', tareas:[] },
    { id: 2, nombre: 'Compras', tareas:[]},
    ])
    let listaSeleccionada = ref(null);
    const agregarNuevaLista =(nombreLista)=> {
      const nuevaLista = {
        id: listas.value.length + 1,
        nombre: nombreLista,
        tareas:[]
      };
      listas.value.push(nuevaLista);
    }
    const verLista = (index) => {
        listaSeleccionada.value = listas.value[index];
        mostrarTarea.value = true;
    };

    
    const verAgregar = () => {

    crearLista.value = !crearLista.value;
};

</script>

<style scoped>
.app {
  background-color: #f5f8fa; 
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; /* Añade un margen inferior para separar el título del contenido */
}
.container {
  background-color: white; 
  max-width: 1200px;
  margin: auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2{
    text-align: left;
}
.crearListas{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
}
.lista {
  background-color: #1da1f2; 
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  justify-content: space-between;
  width: 360px;
  gap: 0 10px;
  margin: 8px;
  padding: 8px;
  text-align: center; 
  display: inline-block;
}
.add-button {
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add-button-container {
  display: flex;
  justify-content: flex-end; /* Alinea el botón a la derecha */
  margin: 8px 0; /* Añade margen arriba y abajo para separar el botón de la lista */
}
.add-button:hover {
  background-color: #0d8bff;
}
*{
    font-family: 'Roboto', sans-serif;
}
</style>