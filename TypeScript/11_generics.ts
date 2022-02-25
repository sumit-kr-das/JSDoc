function getData(data: object): object {
  return data;
}

console.log(
  getData({
    name: "sumit kr das",
    roll: 55,
    address: "kalkata",
  })
);

/*
  In the case of the function we cannot pass anything
  wihout a object.
  So, we can use generics function, For Ex: 
*/

function saveData<T>(data: T): T {
  return data;
}

console.log(
  saveData({
    name: "snehasis das",
    roll: "One",
    address: "91",
  })
);
