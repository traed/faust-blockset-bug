# faust-blockset-bug

## To reproduce
0. Setup a WordPress site
1. `cp .env.local.sample .env.local` and connect to the WordPress site
2. `npm install && npm run build`
3. `npm run blockset`, works fine
4. Go to `./wp-blocks/my-first-block/MyFirstBlock.jsx`, comment out line 10 and uncomment lines 1, 5, 6, and 7.
5. Run `npm run blockset` again, this time it will fail.
