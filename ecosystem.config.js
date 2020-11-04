module.exports = {
  apps : [ {
    name:"EXpress app",
    script: './bin/www',
    watch:true,
    instances : 4,
    exec_mode : "cluster",
    autorestart:true,
    max_memory_restrat:'1G',
    exec_mode:"cluster",
    env:{
      NODE_ENV:'development',
      
    },
    env_production:{
      NODE_ENV:'production',

    }
  }],

};
