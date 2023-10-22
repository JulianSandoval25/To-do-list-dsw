<template>
    <div>
        <input v-model="nuevaLista" placeholder="Nueva lista" />
        <button class="add-button" @click="agregarLista">Agregar Lista</button>
    </div>
</template>

<script setup>
    import {ref } from 'vue'
    const nuevaLista = ref("")
    const emit = defineEmits(['nueva-lista'])
    const agregarLista = () => {
        if (nuevaLista.value.trim() !== '') {
            emit('nueva-lista', nuevaLista.value);
            nuevaLista.value = '';
        }
    }

</script>

<style>
input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
  outline: none;
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

.add-button:hover {
  background-color: #0d8bff;
}
</style>