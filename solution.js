/**
 * Mengembalikan hasil penjumlahan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function tambah(a, b) {
    return a + b
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function kurang(a, b) {
    return a - b
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function kali(a, b) {
    return a * b
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number | string}
 */
export function bagi(a, b) {
    return b !== 0 ? a / b : "Pembagian oleh nol tidak diperbolehkan"
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
 export function pangkat(a, b) {
    return a ** b;
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * @param {number} n 
 * @returns {number}
 */
export function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n 
 * @returns {boolean}
 */
export function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Mengembalikan hasil dari a modulus b.
 * modulus adalah sisa pembagian a dengan b.
 * contoh 10 mod 3 = 1, karena 10 dibagi 3 adalah 3 sisa 1.
 * 10 / 3 = 3 sisa 1. dan 1 adalah jawabannya
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function modulus(a, b) {
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a 
 * @returns {number}
 */
export function absolut(a) {
}


/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function maksimum(a, b) {
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
export function minimum(a, b) {
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a 
 * @returns {number}
 */
export function bulatkan(a) {
}

