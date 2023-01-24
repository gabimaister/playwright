pipeline {
  agent any
  stages {
    stage('e2e-tests') {
         steps {
            sh 'npm install'
            sh 'npm run test'
         }
      }
    }
  }
}