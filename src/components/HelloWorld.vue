<template>
  <div id="Home">
    <vue-particles
      color="#42c2ff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="text">
      <h1>SoftaMine</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style>
.container {
  padding: 0;
}

canvas {
  position: absolute;
  background-color: black;
}
</style>

<style scoped>
.h2 {
  position: absolute !important;
  justify-content: center;
}
.text {
  position: absolute;
  text-align: center;
}
</style>
