const args = process.argv.slice(2);
const usage = 'Usage: node src/hello.mjs [--name NAME]';

if (args.length === 0) {
  console.log('Hello, world!');
} else if (args.length === 1 && args[0] === '--help') {
  console.log(usage);
} else if (
  args.length === 2 &&
  args[0] === '--name' &&
  /\S/u.test(args[1]) &&
  !args[1].startsWith('-')
) {
  console.log(`Hello, ${args[1]}!`);
} else {
  console.error(usage);
  process.exitCode = 2;
}
