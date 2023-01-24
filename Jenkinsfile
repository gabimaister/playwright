pipeline {
  agent any
 environment {
        HOME = "${env.WORKSPACE}"
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
