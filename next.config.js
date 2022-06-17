module.exports = {
    reactStrictMode:true,
    images: {
        domains: [ "image.tmdb.org" ,"img3.hulu.com","img4.hulu.com","img.hulu.com","img1.hulu.com", "img4.hulu.com","img2.hulu.com","www.hulu.com","hulu-matchmaker.s3.amazonaws.com"],
        
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      }
}