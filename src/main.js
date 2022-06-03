'use strict'

const navWrapper = document.querySelector('.nav-menu ul')

const navs = ['Beranda', 'Produk', 'Testimoni', 'Kontak Kami']

navWrapper.innerHTML = navs.map(nav => `<li>${ nav }</li>`).join('')
