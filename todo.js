document.querySelector('.btn-get-list-todo').onclick = () => {

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(
            (response) => {
                // JSON.parse(response);
                return response.json();
            }
        )
        .then(
            (response) => {
                console.log('🚀 >>>::::::::: response :::::::::', response);

                renderTodo(response);
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        )

}

const listTodo = document.querySelector('.list-todo')

const renderTodo = (todos) => {

    listTodo.textContent = '';

    todos.forEach(function (item) {
        console.log(item);

        const pEle = document.createElement('p')
        pEle.textContent = item.title;
        if (item.completed) {
            // pEle.style.textDecoration = 'line-through';
            // pEle.style.color = 'green';

            pEle.style.cssText = "text-decoration: line-through; color: green"
        }

        listTodo.append(pEle);
    })
    // 1. Lặp qua từng phần tử của mảng
    // 2. Tạo element
    // 3. Thêm vào list-todo

}




// const renderTodo = (todos) => {
//     // const lengthTodo = todos.length;
//     // for (let i = 0; i < lengthTodo; i++) {
//     //     console.log(todos[i]);
//     // }
//     const listTodoEle = document.querySelector('.list-todo')

//     // reset trước khi thêm vào
//     listTodoEle.textContent = '';

//     todos.forEach(
//         function (todo) {
//             console.log('todo', todo);

//             const todoEle = document.createElement('p')

//             todoEle.textContent = todo.title
//             if (todo.completed) {
//                 todoEle.style.textDecoration = 'line-through';
//             }

//             listTodoEle.append(todoEle);
//         }
//     )

// }