let id = 'no'

function selectData(){
    let arr = JSON.parse(localStorage.getItem('crud'))
    if(arr != null){
        let html = ''
        let slno = 1
        for(let i = 0 ; i < arr.length ; i++){
            html = html + `<tr><td>${slno}</td><td>${arr[i]}</td>
            <td><button onclick = "editData(${i})" >Edit</button></td>
            <td><button onclick = "deleteData(${i})" >delete</button></td>
            </tr>`
            slno++
        }
        document.getElementById('root').innerHTML = html
    }
}
selectData()
function managedata(){
    document.getElementById('msg').innerHTML = ""
    let name = document.getElementById('name').value
    if(name == ''){
       let y = document.getElementById('msg')
       y.innerHTML = 'please enter Name*'
       y.style.color = "red"
    }else{
        if(id == 'no'){
            let arr = JSON.parse(localStorage.getItem('crud'))
            if(arr == null){
                let data = [name]
                localStorage.setItem('crud',JSON.stringify(data))
            }else{
                arr.push(name)
                localStorage.setItem('crud' , JSON.stringify(arr))
            }
            document.getElementById('name').value = '';

            let x = document.getElementById('msg')
            x.innerHTML = "data added successfully*"
            x.style.color = "green"
        }
        
        else{
            let arr = JSON.parse(localStorage.getItem('crud'))
            arr[id] = name
            localStorage.setItem('crud', JSON.stringify(arr))
            let x = document.getElementById('msg')
            x.innerHTML = "data updated successfully*"
            x.style.color = "green"
            document.getElementById('name').value = ''
        }
        selectData()
    }
   
}

function deleteData(ind){
    alert('are you sure?.')
    let arr = JSON.parse(localStorage.getItem('crud'))
    arr.splice(ind , 1 )
    localStorage.setItem('crud' , JSON.stringify(arr))
    selectData()
}

function editData(ind){
    id = ind
    let arr = JSON.parse(localStorage.getItem('crud'))
    document.getElementById('name').value = arr[ind]
}
