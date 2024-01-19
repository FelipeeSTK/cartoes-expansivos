const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {/*vai percorrer todos os itens da classe panel*/
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    }) /* assim que clicar na imagem ela vai expandir, ou seja se tornar ativa*/
})
function removeActiveClasses() { /*trocar a imagem de fundo, removendo a que está selecionada*/
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}