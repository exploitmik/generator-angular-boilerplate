const Generator = require('yeoman-generator');
const simpleGit = require('simple-git')();

module.exports = class extends Generator {
  async initializing(){
    this.log('baixando...');
    await simpleGit.clone('https://github.com/exploitmik/vue-boilerplate-graphql.git');
    this.log('download concluído');
  }
}
