function print(text) {
  console.log(text);
}

function isValid(name) {
  if (!name) {
    return false;
  }
  if (name.includes(' ')) {
    return false;
  }
  if (name.length < 4) {
    return false;
  }
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
