// Import modul readline untuk handle input dan output
const readline = require("readline");
// Import modul solution
const calc = require("./solution");
// Import modul proces
const { stdin, stdout } = require("process");

// Setup input dan output
const rl = readline.createInterface({
  input: stdin, // Input dari pengguna (keyboard)
  output: stdout, // Output ke terminal
});

/**
 * Handle input secara asinkron
 * @param {string} query
 * @returns {string}
 */
function tanyaPertanyaan(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

/**
 * Fungsi utama program
 */
async function main() {
  console.log("Selamat datang di kalkulator Kami!");

  while (true) {
    let operation = await tanyaPertanyaan(
      'Masukkan operasi (+(tambah), -(kurang), *(kali), /(bagi), **(pangkat), !(faktorial), %(modulus), cekprima, abs(absolut), maks(maksimal), min(minimum), round(bulatkan) atau ketik "exit" untuk keluar: '
    );

    if (operation == "exit") {
      rl.close();
      break;
    }

    let a, b, result;

    if (
      operation === "!" ||
      operation === "cekprima" ||
      operation === "abs" ||
      operation === "round"
    ) {
      a = parseFloat(await tanyaPertanyaan("Masukkan angka pertama: "));
    } else {
      a = parseFloat(await tanyaPertanyaan("Masukkan angka pertama: "));
      b = parseFloat(await tanyaPertanyaan("Masukkan angka kedua: "));
    }

    switch (operation) {
        case '+':
            result = calc.tambah(a, b);
            break;
        case '-':
            result = calc.kurang(a, b);
            break;
        case '*':
            result = calc.kali(a, b);
            break;
        case '/':
            result = calc.bagi(a, b);
            break;
        case '**':
            result = calc.pangkat(a, b);
            break;
        case '!':
            result = calc.faktorial(a);
            break;
        case 'cekprima':
            result = calc.isPrima(a) ? "Bilangan Prima" : "Bukan Bilangan Prima";
            break;
        case 'abs':
            result = calc.absolut(a);
            break;
        case 'maks':
            result = calc.maksimum(a, b);
            break;
        case 'min':
            result = calc.minimum(a, b);
            break;
        case 'round':
            result = calc.bulatkan(a);
            break;
        case '%':
            result = calc.modulus(a, b);
            break
      default:
        result = "Operasi tidak dikenali!";
    }

    console.log(`Hasil: ${result}`);
  }
}

// Jalankan program utama
main();
