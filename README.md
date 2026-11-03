# Noche de Poker

App web para organizar una noche de poker entre amigos: arma el **reparto de fichas**, lleva el **reloj de ciegas** y hace las **cuentas finales** (quién le pasa plata a quién). Se instala en el celular como una app y funciona sin internet.

**Probala acá:** https://maticufre.github.io/poker/

## ¿Qué hace?

| Pestaña | Para qué sirve |
|---|---|
| **Fichas** | Elegís cuántos jugadores son, cuánto pone cada uno y qué colores de ficha tienen. La app calcula cuánto vale cada ficha y cuántas recibe cada jugador para que todos arranquen con exactamente el mismo monto. También muestra cuántas fichas sobran en el banco. |
| **Reloj** | Reloj de 2 horas con las ciegas. Elegís entre ciegas fijas o que suben a la hora. Avisa en pantalla (y con sonido) cuando suben. |
| **Cuentas** | Cargás cuántas fichas de cada color tiene cada jugador al final. Calcula cuánto dinero tiene cada uno y arma las transferencias: quién le pasa cuánto a quién. |
| **Manos** | Ranking de manos de poker, con cartas de ejemplo y la probabilidad de cada una. |
| **Mesa** | Recordatorio de reglas: sentido de juego, orden de las ciegas y cierre de la partida. |

### Cómo se arman las fichas y las ciegas

- Los colores van siempre de menor a mayor valor: **blanca, roja, verde, azul, negra**. Podés usar solo los que tengas.
- Cada color tiene un valor "redondo" y cada valor es múltiplo del anterior, así siempre se puede dar cambio.
- La **small blind es la ficha de menor valor** que elegiste y la **big blind es el doble**.
- El inventario de fichas (cuántas hay de cada color) se puede cambiar. Por defecto: 80 blancas y 40 de cada otro color.

## Instalarla en el celular o la compu

- **iPhone:** abrí el enlace en **Safari**, tocá Compartir y después **Añadir a pantalla de inicio**.
- **Android:** abrí el enlace en **Chrome**, tocá el menú de los tres puntos y después **Instalar app**.
- **PC:** abrí el enlace en **Chrome o Edge** y tocá el ícono de instalar que aparece a la derecha de la barra de direcciones.

Después de la primera carga funciona **sin conexión**.

## Privacidad

No hay cuentas, ni anuncios, ni seguimiento. Todo lo que cargás (jugadores, fichas, reloj) se guarda **solo en tu dispositivo**. Lo único que se pide a internet son las tipografías de Google Fonts; si no hay conexión se usan las del sistema.

## Para quien quiera tocar el código

Es una sola página (`index.html`) sin dependencias ni proceso de compilación.

```
index.html              la app completa (HTML, CSS y JavaScript)
manifest.webmanifest    datos para instalarla como app
sw.js                   modo sin conexión
apple-touch-icon.png    ícono para iPhone
icon-192.png            ícono para Android y PC
icon-512.png            ícono grande
```

Para publicarla con GitHub Pages: subí estos archivos a la raíz de un repositorio público y activá **Settings → Pages → Deploy from a branch → main / (root)**.

Para actualizarla, reemplazá `index.html` (y `sw.js` si cambió) y esperá un minuto. Los celulares avisan solos cuando hay una versión nueva.
