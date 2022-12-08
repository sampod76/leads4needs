// require("babel-register")({
//     presets: ["es2015", "react"]
//   });


require("babel-register")({
  "presets": ["@babel/preset-env", "@babel/preset-react"]
});
   
  // const router = require("./sitemap-routes").default;
  import Generator from 'react-router-sitemap-generator';
  import Router from './sitemap-routes';
  
  // function generateSitemap() {
  //     return (
  //       new Sitemap(router)
  //           .build("http://localhost:3000")
  //           .save("./public/sitemap.xml")
  //     );
  // }
  
  // generateSitemap();

  // inorder to create sitemap just run npm run sitemap in client directory; 


  const generator = new Generator(
    'http://localhost:3000',
    Router,
    {
      lastmod: new Date().toISOString().slice(0, 10),
      changefreq: 'monthly',
      priority: 0.8,
    }
  );
  generator.save('public/sitemap.xml');