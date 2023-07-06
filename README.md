
# This is my project created for Stormotion Internship Test Task

# Demo: https://gameland-omega.vercel.app


### Description [ Також опис українською доступний внизу :)  ] ->

This project was made with a framework for React.JS - Next.JS, TailwindCSS and a HeadlessUI plugin for some of UI styling. 
When you visit the website, on a landing page there are 3 buttons, which are responsible for 3 different gamemodes:
1. Player goes first;
2. Alternative game mode - AI goes first;
3. Custom game mode - User inputs `m` and `n` values in the modal window. There are `2n + 1` matches in the pile and the number of matches allowed to take on each turn is from 1 to `m`. For this example maximum allowed `m` value is 9.

Landing Page:
![gameland-omega vercel app_](https://github.com/pie3phobic/Internship-test-task/assets/115817261/815448b0-a5f6-475b-8580-4c5d69e8aa65)

After clicking upon any button, the page with selected game mode will load up:
1. Classic game mode page:
![gameland-omega vercel app_ (1)](https://github.com/pie3phobic/Internship-test-task/assets/115817261/83f5a9af-988b-49a3-ab90-a6444d41cea9)
2. Alternative game mode page:
![gameland-omega vercel app_ (2)](https://github.com/pie3phobic/Internship-test-task/assets/115817261/044ede5c-60b8-4015-aadc-df6623469684)
3. To access Custom Game mode page user will have to input `m` and `n` values in the modal window:
![gameland-omega vercel app_ (3)](https://github.com/pie3phobic/Internship-test-task/assets/115817261/1aa69a61-4a18-4a01-b176-d703d2f5084e)
and then the page will load up with the correct settings that we're specified by the user:
![gameland-omega vercel app_ (4)](https://github.com/pie3phobic/Internship-test-task/assets/115817261/af3e2c21-8aaf-4e48-89b1-c46fa4e14342)

## Completed tasks:
1. Used a framework;
2. Created a user interface for an app;
3. AI makes decisions based on an optimal strategy (not just picking a random number of matches);
4. Wrote project with TypeScript and React;
5. Used React Hooks;
## Completed Bonus tasks:
1. Added an alternative game mode where the first move is made by AI. The user can select the game mode;
2. Implement a third Custom Game mode with the general solution where there are `2n + 1` matches in the pile and the number of matches allowed to take in each turn is from 1 to `m`. The user can adjust the parameters `n` and `m` in the modal window.

## AI Logic:
- The optimal strategy that AI follows for the classic mode when player goes first:
AI removes matches based on what the player does, ensuring that 4 matches are removed from the game each round.
If player takes 1 match, AI will take 3 matches.
If player takes 2 matches, AI will take 2 matches.
If player take 3 matches, AI will take 1 match.
As long as a total of 4 matches are removed each round, the opponent will always be left with the last match.
If there are less than 5 matches left AI will decide how much to take based on whether the amount of matches it has is even or odd and the amount of matches left.
- The optimal strategy that AI follows for the alternative mode when it goes first:
AI will always take 2 matches since it's the most benefiting starting position and then it will follow the logic that was described above, making sure that 4 matches are removed on each round.
- Strategy for the custom game mode:(Nim-sum strategy)
It calculates the Nim-sum using the XOR operator (^) on the number of matches and the number of matches taken by player. Then, it applies the strategy based on the value of the Nim-sum.
If the Nim-sum is 0, indicating a losing position, the code selects a random move between 1 and m. If the Nim-sum is non-zero, it proceeds with further calculations. It finds the highest set bit in the Nim-sum using the logarithm and bitwise shifting operations. The value of the highest bit is determined as 1 << highestBit. The code calculates the reduced number of matches by subtracting the highest bit value from the total number of matches.
If the reduced number of matches is less than or equal to 0, the code takes the minimum between the original number of matches and m. Otherwise, it takes the minimum between the reduced number of matches and m.

**Image credits: Freepic

## Results with witty responces from the AI :D
Victory:
![localhost_3000_game](https://github.com/pie3phobic/Internship-test-task/assets/115817261/4131150f-c3b6-4afe-ad9d-9ca0ef7a7f78)
Loss:
![localhost_3000_game (1)](https://github.com/pie3phobic/Internship-test-task/assets/115817261/56ba0703-471f-4bc7-bd43-1118d889e09c)

This project can be potentially improved because there are still a few areas where further abstraction can be applied to enhance the single responsibility principle and to reduce code coupling. Also, some code duplication can be omitted by refactoring some parts of the code.

Thank you <3

## Опис:
Цей проєкт створено з використанням фреймворку для React.JS - Next.JS, TailwindCSS і плагіна HeadlessUI для стилізації деяких компонент інтерфейсу користувача.
На головний сторінці сайту є 3 кнопки, які відповідають за 3 різні режими гри:
1. Гравець йде першим;
2. Альтернативний режим гри - ШІ йде першим;
3. Спеціальний режим гри - користувач вводить значення `m` і `n` у модальному вікні. У стопці є «2n + 1» сірників, а кількість сірників, дозволених для кожного ходу, становить від 1 до «m». Для цього прикладу максимально дозволене значення `m` становить 9.

Дякую! <3

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```
npm i
````

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
