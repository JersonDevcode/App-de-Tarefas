const elementoLista = document.querySelector("ul")
const ElementoInput = document.querySelector("input")
const ElementoButton = document.querySelector("button")


const tarefas = []

function MostrarTarefas (){

    elementoLista.innerHTML = ""

  for (tarefa of tarefas){
      const elementoTarefa = document.createElement('li')
      const textoTarefa = document.createTextNode(tarefa)

      const elementoLink = document.createElement('a')
      const pos = tarefas.indexOf(tarefa)

      Linktext = document.createTextNode('X')
      elementoLink.appendChild(Linktext)


      elementoLink.setAttribute("onclick", `deletaTarefa(${pos})`)

      elementoTarefa.appendChild(textoTarefa)
      elementoLista.appendChild(elementoTarefa)
      elementoTarefa.appendChild(elementoLink)
  }
}

MostrarTarefas()


function AdicionarTarefas(){
    const textoTarefa = ElementoInput.value
    tarefas.push(textoTarefa)
    ElementoInput.value = ""

    MostrarTarefas()
}

ElementoButton.setAttribute("onclick",'AdicionarTarefas()')

function deletaTarefa(pos){
    tarefas.splice(pos, 1)
    MostrarTarefas()
}