function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = new Date();
}

function UserList() {
    this.users = [];
}

UserList.prototype.addUsers = function addUsers(user) {
    this.users.push(user);
}

UserList.prototype.getAllUsers = function getAllUsers() {
    this.users.forEach(function (element, index) {
        console.log(`${index + 1}: ${element.firstName} ${element.lastName} ${element.regDate.toLocaleTimeString()}`);
    })
}

UserList.prototype.searchDuplicateUsers = function searchDuplicateUsers(user) {
    let users = userList.users;
    users.filter((user, index) => {
        // if(item.indexOf(index) < 0) item.push(index)
        console.log(index);
        console.log(users.indexOf(user)); // всегда 0???
        if (index !== users.indexOf(user)) {
            alert('Такой пользователь существует!')
        } else {
            userList.addUsers(user)
        }
        // return user.indexOf(item) === index;
        // return item
    })
}

let userList = new UserList()
let experimentalUser

while (experimentalUser = prompt('Введите имя и фамилию')) {
    let fullNameUser = experimentalUser.split(' ')
    if (fullNameUser.length === 2) {
        let user = new User(fullNameUser[0], fullNameUser[1])

        console.log('Длина списка пользователей', userList.users.length);

        let users = userList.users;
        if (users.length == 0) {
            alert('Длина списка пользователей была равно 0! добавим первого пользователя!')
            userList.addUsers(user);
            console.log('Вывод списка с первым пользователем', users);
        } else {
            userList.searchDuplicateUsers(user);
            // alert('Список пользователей уже имеет 1го или более пользователя! нужна проверка на дублирование!')
            // for (let i = 0; i <= users.length; i++) {
            //     console.log('name_in_list', users[i].firstName);
            //     console.log('my_name', fullNameUser[0]);

            //     console.log('Проверка условия равенства имен', users[i].firstName === fullNameUser[0]); // при дублировании тут true
            //     console.log('Проверка условия равенства фамилий', users[i].lastName === fullNameUser[1]); // при дублировании тут true
            //     alert('я в цикле!');

            //     console.log('Проверка суммарного условия: ', (true && true));
            //     console.log('Проверка суммарного условия: ', ((users[i].firstName === fullNameUser[0]) && (users[i].lastName === fullNameUser[1]))); // вот тут почему то false???

            //     if ((users[i].firstName === fullNameUser[0]) && (users[i].lastName === fullNameUser[1])) {  
            //         alert('Такой пользователь уже существует! Введите другого');
            //         break;
            //     } else {
            //         alert('Вы новый пользователь! Добро пожаловать!')
            //         userList.addUsers(user);
            //         break;
            //     }
            // }
        }

        // const searchDuplicateUsers = this.users.filter((item) => {
        //     return index === user.findIndex (Object => {
        //         return JSON.stringify(Object) === JSON.stringify(item)
        //     })
        // })

        // userList.addUsers(user)

        // const searchDuplicateUsers = user.filter((item, index) => {
        //     // return index === fullNameUser.indexOf(item)
        //     index !== user.indexOf(item) ? alert('Такой пользователь существует!') : userList.addUsers(user)
        //     // console.log(item, index)
        // });


        // const searchDuplicateUsers = (s, user) => {
        //     let resulr = user.filter((element) => {
        //         return element.indexOf(s) > -1
        //     })
        // }
        // console.log(user)

        // userList.searchDuplicateUsers(user)
    } else if (fullNameUser.length > 2) {
        alert("Более двух слов быть не должно!")
        fullNameUser.splice(-1, 1)
    } else if (fullNameUser.length === 1) {
        alert("Введите фамилию тоже!")
        fullNameUser.splice(-1, 1)
    }
}

userList.getAllUsers()
