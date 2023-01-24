pipeline {
  agent any
  environment {
        npm_config_cache = 'npm-cache'
    }
  stages {
    stage('e2e-tests') {
         steps {
            sh 'npm install'
            sh 'npm run test'
         }
    }
  }
}
