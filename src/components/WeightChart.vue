<template lang="">
    <div>
        <h2>Gráfico de Progreso de Peso</h2>
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script>
export default {
    extends: Line,
    computed: {
        weightData() {
            return this.$store.state.weightData;
        },
    },
    mounted() {
        this.renderChart(
            {
                labels: this.weightData.map((entry, index) => index + 1),
                datasets: [
                    {
                        label: 'Peso',
                        borderColor: '#41B883',
                        data: this.weightData,
                    },
                ],
            },
            { responsive: true, maintainAspectRatio:  false }
        );
    },
};
</script>