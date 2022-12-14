module.exports = function Greet(db) {
  
  let alphabets = /^[a-z A-Z]+$/;

  async function greet2(names) {

    let name = names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();

    let show = await db.one('SELECT count(*) from greeted_users WHERE greeted_names = $1', [name])
  if (show.count ==0){
    await db.none("INSERT into greeted_users(greeted_names,counter) values($1,1)", [name])
}
else {
  await db.none("UPDATE greeted_users set counter = counter + 1 where greeted_names=$1", [name])
}


  }
  
  async function clearNames() {
    await db.none('DELETE from greeted_users')

  }
    
  async function countNames() {

      let counted = await db.any('SELECT * from greeted_users');
      return counted.length

  }
  async function listofNames() {
    let greeted = await db.manyOrNone('SELECT greeted_names from greeted_users');
    return greeted
  }

  async function resetButton() {
    return "Names succesfully cleared!"

  }

  async function userCounter(name) {
    let counter = await db.oneOrNone('SELECT greeted_names, counter from greeted_users WHERE greeted_names=$1', [name])
    return counter
  }


  return {
    resetButton,
    listofNames,
    clearNames,
    greet2,
    countNames,
    userCounter

  }

}