<template>
  <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
    <!-- Ambient Radial Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,130,124,0.35)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(250,209,255,0.15)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
    
    <!-- Soaring Vulture 3D & Bioluminescent Wind Canvas -->
    <canvas ref="vultureCanvas" class="w-full h-full block"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const vultureCanvas = ref(null)
let animationId = null

const initVultureAnimation = () => {
  const canvas = vultureCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
  let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

  const handleResize = () => {
    if (!canvas) return
    width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
    height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  // Floating Bioluminescent Feather & Wind Particles
  const numParticles = 100
  const particles = []
  const colors = ['#cbfffc', '#edfffe', '#00827c', '#fde9ff']

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.8 + 0.5,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)] || '#ffffff'
    })
  }

  let time = 0

  // Draw 3D Soaring Vulture Wings Path
  const drawVulture = (centerX, centerY, scale, wingFlap) => {
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.scale(scale, scale)

    // Wings Flapping Math Curve
    const flapAngle = Math.sin(wingFlap) * 0.22

    ctx.beginPath()

    // Left Wing
    ctx.moveTo(0, 0)
    ctx.bezierCurveTo(
      -60, -40 + flapAngle * 120,
      -140, -50 + flapAngle * 180,
      -220, -10 + flapAngle * 220
    )
    ctx.bezierCurveTo(
      -160, 20 + flapAngle * 100,
      -90, 25,
      0, 15
    )

    // Right Wing
    ctx.bezierCurveTo(
      90, 25,
      160, 20 + flapAngle * 100,
      220, -10 + flapAngle * 220
    )
    ctx.bezierCurveTo(
      140, -50 + flapAngle * 180,
      60, -40 + flapAngle * 120,
      0, 0
    )

    // Head
    ctx.moveTo(0, -10)
    ctx.arc(0, -18, 7, 0, Math.PI * 2)

    // Glowing Bioluminescent Fill & Outline
    ctx.fillStyle = 'rgba(203, 255, 252, 0.85)'
    ctx.shadowColor = 'rgba(0, 210, 200, 0.9)'
    ctx.shadowBlur = 25
    ctx.fill()

    ctx.strokeStyle = 'rgba(237, 255, 254, 0.7)'
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.restore()
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)
    time += 0.03

    // 1. River Wind Particles
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy + Math.sin(time + p.x * 0.01) * 0.3

      if (p.x > width) p.x = 0
      if (p.x < 0) p.x = width
      if (p.y > height) p.y = 0
      if (p.y < 0) p.y = height

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha
      ctx.fill()
    })

    // 2. Main Soaring Vulture
    const v1X = width * 0.5 + Math.sin(time * 0.7) * 45
    const v1Y = height * 0.45 + Math.cos(time * 0.5) * 25
    drawVulture(v1X, v1Y, 0.75, time * 1.2)

    // 3. Companion Vulture 1
    const v2X = width * 0.28 + Math.sin(time * 0.8 + 1) * 35
    const v2Y = height * 0.35 + Math.cos(time * 0.6 + 1) * 20
    drawVulture(v2X, v2Y, 0.45, time * 1.5 + 1.2)

    // 4. Companion Vulture 2
    const v3X = width * 0.72 + Math.cos(time * 0.6 + 2) * 35
    const v3Y = height * 0.38 + Math.sin(time * 0.7 + 2) * 20
    drawVulture(v3X, v3Y, 0.38, time * 1.3 + 2.4)

    animationId = requestAnimationFrame(render)
  }

  render()
}

onMounted(() => {
  initVultureAnimation()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
/* Scoped 3D canvas styles */
</style>
