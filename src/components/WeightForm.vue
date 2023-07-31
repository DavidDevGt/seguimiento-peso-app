<template lang="">
    <div>
        <label for="weightInput">Ingresa tu peso: </label>
        <input type="number" id="weightInput" v-model="weight" />
        <button @click="addWeight">Registrar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weight: null,
        };
    },
    methods: {
        addWeight() {
            if (!this.weight) return;
            this.$store.commit('ADD_WEIGHT', parseFloat(this.weight));
            this.weight = null;
        },
    },
};
</script>
