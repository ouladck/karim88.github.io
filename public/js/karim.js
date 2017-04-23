var app, app1;

app = new Vue({
  el: '#about',
  data: {
    langs: [['angularjs', 'devicon-angularjs-plain colored'], ['atom', 'devicon-atom-plain colored'], ['bitbucket', 'devicon-bitbucket-plain colored'], ['bootstrap', 'devicon-bootstrap-plain colored'], ['bower', 'devicon-bower-plain colored'], ['css3', 'devicon-css3-plain colored'], ['coffeescript', 'devicon-coffeescript-plain colored'], ['firfox', 'devicon-firefox-plain colored'], ['gimp', 'devicon-gimp-plain colored'], ['git', 'devicon-git-plain colored'], ['github', 'devicon-github-plain colored'], ['gulp', 'devicon-gulp-plain colored'], ['html5', 'devicon-html5-plain colored'], ['inkscape', 'devicon-inkscape-plain colored'], ['jquery', 'devicon-jquery-plain colored'], ['laravel', 'devicon-laravel-plain colored'], ['linux', 'devicon-linux-plain colored'], ['mysql', 'devicon-mysql-plain colored'], ['apache', 'devicon-apache-plain colored'], ['nginx', 'devicon-nginx-plain colored'], ['php', 'devicon-php-plain colored'], ['python', 'devicon-python-plain colored'], ['rails', 'devicon-rails-plain colored'], ['ruby', 'devicon-ruby-plain colored'], ['redis', 'devicon-redis-plain colored'], ['sass', 'devicon-sass-plain colored'], ['ssh', 'devicon-ssh-plain colored'], ['trello', 'devicon-trello-plain colored'], ['ubuntu', 'devicon-ubuntu-plain colored']]
  },
  methods: {
    changeColored: function(e) {
      return $(e.target).toggleClass('colored');
    }
  }
});

app1 = new Vue({
  el: '#footer',
  data: {
    date: new Date().getFullYear()
  }
});
