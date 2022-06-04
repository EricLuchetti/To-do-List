var lista_tr = document.getElementsByTagName("LI");
var i;
for (i = 0; i < lista_tr.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  lista_tr[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function novaTarefa() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inserir").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Coloque uma tarefa!");
  } else {
    document.getElementById("tarefas").appendChild(li);
  }
  document.getElementById("inserir").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function ordenar() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("tarefas");
    switching = true;

    while (switching) {

      switching = false;
      b = list.getElementsByTagName("LI");

      for (i = 0; i < (b.length - 1); i++) {

        shouldSwitch = false;

        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
}

/*function adicionar() {
    let tr = document.getElementById('tarefa').value
    var dt = document.getElementById('data').value
    dt1 = dt.replace(/-/g,'/')
    let tarefas = document.getElementById('tarefas')
    tarefas.innerHTML = `${tr} ${dt1}`
    alert(`A tarefa "${tr}" foi adicionada em ${dt1}.`)
}
*/

    /*let tr_jan = document.getElementById('tr_jan')
    let tr_fev = document.getElementById('tr_fev')
    let tr_mar = document.getElementById('tr_mar')
    let tr_abr = document.getElementById('tr_abr')
    let tr_mai = document.getElementById('tr_mai')
    let tr_jun = document.getElementById('tr_jun')
    let tr_jul = document.getElementById('tr_jul')
    let tr_ago = document.getElementById('tr_ago')
    let tr_set = document.getElementById('tr_set')
    let tr_out = document.getElementById('tr_out')
    let tr_nov = document.getElementById('tr_nov')
    let tr_dez = document.getElementById('tr_dez')
    var data = dt 
    var mes = data.getMonth() */
    /*switch(mes) {
        case 0:
            tr_jan.innerHTML = `${tr} ${dt}`
            break
        case 1:
            tr_fev.innerHTML = `${tr} ${dt}`
            break
        case 2:
            tr_mar.innerHTML = `${tr} ${dt}`
            break
        case 3:
            tr_abr.innerHTML = `${tr} ${dt}`
            break
        case 4:
            tr_mai.innerHTML = `${tr} ${dt}`
            break
        case 5:
            tr_jun.innerHTML = `${tr} ${dt}`
            break
        case 6:
            tr_jul.innerHTML = `${tr} ${dt}`
            break
        case 7:
            tr_ago.innerHTML = `${tr} ${dt}`
            break
        case 8:
            tr_set.innerHTML = `${tr} ${dt}`
            break
        case 9:
            tr_out.innerHTML = `${tr} ${dt}`
            break
        case 10:
            tr_nov.innerHTML = `${tr} ${dt}`
            break
        case 11:
            tr_dez.innerHTML = `${tr} ${dt}`
            break
        default:
            console.log('Mês inválido!')
            break
    }*/


    /*var a = document.getElementById('block')
    a.addEventListener('click', check)

    function check() {
    a.style.display = none;
    }*/


    /* function adicionar() {
    let tar1 = document.getElementById('tarefa').value;
    let add1 = document.getElementById('add').value;
    let tar2 = Text(tar1.value);
    add1.innerHTML = `Tarefa "${tar2}" adicionada`;
    }
    switch(mes) {
        case 0:
            console.log('Janeiro')
            break
        case 1:
            console.log('Fevereiro')
            break
        case 2:
            console.log('Março')
            break
        case 3:
            console.log('Abril')
            break
        case 4:
            console.log('Maio')
            break
        case 5:
            console.log('Junho')
            break
        case 6:
            console.log('Julho')
            break
        case 7:
            console.log('Agosto')
            break
        case 8:
            console.log('Setembro')
            break
        case 9:
            console.log('Outubro')
            break
        case 10:
            console.log('Novembro')
            break
        case 11:
            console.log('Dezembro')
            break
        default:
            console.log('Mês inválido!')
            break
    }*/


