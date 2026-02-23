# Recruitment Task - E-commerce Data Visualization

Projekt analizy i wizualizacji danych e-commerce przygotowany w ramach procesu rekrutacyjnego. Aplikacja przetwarza dane z pliku JSON i prezentuje kluczowe wskaźniki biznesowe za pomocą interaktywnych wykresów.

## 📊 Wybrane wizualizacje i uzasadnienie

W projekcie zdecydowałem się na przygotowanie 3 kluczowych zestawień, które najlepiej oddają kondycję sprzedaży w analizowanym okresie (1-7.10.2024):

1. **Udział krajów w przychodzie (Wykres kołowy / Pie Chart)**
   - **Kluczowe dane:** `country`, `quantity`, `unitPrice`.
   - **Dlaczego:** Pozwala błyskawicznie ocenić, które rynki są najbardziej dochodowe. Wykres kołowy idealnie obrazuje proporcje finansowe bez konieczności analizowania tabel.

2. **Ilość zamówień w czasie (Wykres słupkowy / Column Chart)**
   - **Kluczowe dane:** `timestamp`, `quantity`.
   - **Dlaczego:** Pokazuje dynamikę sprzedaży dzień po dniu. Agregacja danych do pełnych dób pozwala wyłapać trendy (piki sprzedażowe) w skali tygodnia.

3. **Segmentacja urządzeń wg krajów (Wykres skumulowany / Stacked Column)**
   - **Kluczowe dane:** `country`, `device`, `quantity`.
   - **Dlaczego:** To najbardziej zaawansowane zestawienie, które łączy lokalizację z technologią. Pokazuje nie tylko wolumen sprzedaży w danym kraju, ale też preferencje klientów (Desktop vs Mobile vs Tablet), co jest kluczowe dla optymalizacji UX.

## 🛠️ Technologia

- **Framework:** React 19 (Vite)
- **Język:** TypeScript
- **Zarządzanie danymi:** TanStack Query (React Query) - dla zapewnienia czystego pobierania i cache'owania danych.
- **Biblioteka wykresów:** Highcharts (z wrapperem `highcharts-react-official`).
- **Menedżer pakietów:** pnpm (szybszy i bardziej wydajny niż npm).

## 🚀 Uruchomienie lokalne

Aby uruchomić projekt na swoim komputerze, wykonaj poniższe kroki:

1. **Wymagania:**
   - Zainstalowany [Node.js](https://nodejs.org) (rekomendowana wersja v18 lub nowsza).
   - Zainstalowany `pnpm` (jeśli nie masz: `npm install -g pnpm`).

2. **Instalacja zależności:**

   ```bash
   pnpm install

   ```

3. **Uruchomienia:**
   ```bash
   pnpm dev
   ```
