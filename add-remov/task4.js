
            
           
           
           let user = document.getElementById("addtext")
            let empty = document.getElementById("empty")
             
            
            function add(){
                if(!user.value){
                alert("the field is empty")
            } else{
                 
                let element = document.createElement("div");

                element.classList.add("task")
                empty.append(element)
                
                element.innerHTML=`
                <div>
                        <p>${user.value}</p>
                </div>    
                   
            <div>
                <button onclick='editElem(this)'>change</button>
                <button onclick='deleteElem(this)'>Delete</button>
            </div> `
                    
                    user.value = ""

            }
        }
            
            function editElem(elem){
                let element = elem.parentElement.parentElement;
                          element.style.backgroundColor = 'yellow'
                            // element.classList.toggle("this")
                           // element.classList.toggle("task")
                        }
           
                     function deleteElem(elem){
                           elem.parentElement.parentElement.remove();

            }
    