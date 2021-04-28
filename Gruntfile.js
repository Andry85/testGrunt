// Gruntfile.js
 
// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {
 
    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================



    grunt.initConfig({
   
     //Здесь будут указаны модули и их настройки

     /*** Sass */
     sass: {                              // Task
        dist: {                            // Target
          src: 'src/sass/main.scss',
          dest: 'css/main.css'
        }
      },

    /** Watch */
    watch: {
        sass: {
            files: 'src/sass/{,*/}*.{scss,sass}',
            tasks: ['sass']
        }
    },

    serve: {
        options: {
            port: 9000
        }
    }
        

     

    

   
    });
   
    // ===========================================================================
    // Загружаем модули GRUNT ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-sass');
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask('default', ['sass', 'watch']);


  };