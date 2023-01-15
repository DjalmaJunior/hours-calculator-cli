console.log('\n\n\n ### enter 0 or empty to exit ###');
console.log('\n ### format expected: hh:mm ### \n');

function exit(response) {
  console.log('\n\n\nresponse', response);

  process.exit();
}

const date = new Date(0, 0, 0, 0, 0, 0, 0);

process.stdin.on('data', data => {
  if (!`${data}`.match(/\d{2}:\d{2}/) && data != 0) return console.error('Wrong format: hh:mm expected');
  
  const totalHours = `0${date.getHours()}`.slice(-2);
  const totalMinutes = `0${date.getMinutes()}`.slice(-2);

  if (data == 0) exit(`${totalHours}:${totalMinutes}`);

  const [hours, minutes] = data.toString().split(':');

  date.setHours(date.getHours() + Number(hours));
  date.setMinutes(date.getMinutes() + Number(minutes));
});
