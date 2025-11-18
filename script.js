const experience = document.getElementById("experience")
const experienceTime = Math.floor(dayjs().diff(dayjs("2023-05-01"), "year", true))
const age = document.getElementById("age")
const ageTime = Math.floor(dayjs().diff(dayjs("2003-08-18"), "year", true))
experience.textContent = `${experienceTime} years`
age.textContent = `${ageTime} years`

// Função para renderizar as bordas coloridas dinamicamente
function renderBorders() {
    const topBorder = document.getElementById("topBorder")
    const bottomBorder = document.getElementById("bottomBorder")
    
    const containerWidth = document.querySelector('.info-container').offsetWidth
    const charWidth = 10 
    const availableChars = Math.floor(containerWidth / charWidth)
    
    const segmentCount = Math.max(8, Math.floor((availableChars - 6) / 2))
    
    const topColors = ['c5']
    const bottomColors = ['c5']
    
    let topHTML = '<span class="c5"> ┌────</span>'
    for (let i = 0; i < segmentCount; i++) {
        const colorClass = topColors[i % topColors.length]
        topHTML += `<span class="${colorClass}">──</span>`
    }
    topBorder.innerHTML = topHTML
    
    let bottomHTML = '<span class="c5"> └────</span>'
    for (let i = 0; i < segmentCount; i++) {
        const colorClass = bottomColors[i % bottomColors.length]
        bottomHTML += `<span class="${colorClass}">──</span>`
    }
    bottomBorder.innerHTML = bottomHTML
}

// Renderiza ao carregar a página
renderBorders()

// Re-renderiza quando a janela é redimensionada
let resizeTimeout
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(renderBorders, 150)
})