<template>
    <div>
        <h1>{{ lista.nombre }}</h1>
        <h2>Lista de Tareas</h2>
        <input v-model="nuevaTarea" placeholder="Nueva tarea" @keyup.enter="agregarNuevaTarea" />
        <ul>
            <li v-for="(tarea, index) in lista.tareas" :key="index">
                <input type="checkbox" v-model="tarea.completada" />
                <span :class="{ 'completada': tarea.completada }">{{ tarea.texto }}</span>
            </li>
        </ul>
        <div class="barra-de-progreso">
          <div class="progreso" :style="{ width: porcentajeCompletado + '%' }"></div>
        </div>
        <p>Porcentaje Completado: {{  Math.round(porcentajeCompletado) ? Math.round(porcentajeCompletado) : 0 }}%</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['lista']);
const nuevaTarea = ref('');
const lista = computed(() => props.lista);
const tareasCompletadas = computed(() => lista.value.tareas.filter(tarea => tarea.completada).length);
const totalTareas = computed(() => lista.value.tareas.length);
const porcentajeCompletado = computed(() => (tareasCompletadas.value / totalTareas.value) * 100);

const agregarNuevaTarea = () => {
    if (nuevaTarea.value.trim() !== '') {
        lista.value.tareas.push({ texto: nuevaTarea.value });
        nuevaTarea.value = '';
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
}
.completada {
    text-decoration: line-through;
    color: #888;
}
.barra-de-progreso {
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

.progreso {
  height: 100%;
  background-color: #1da1f2;
  border-radius: 4px;
  transition: width 0.3s;
}
</style>