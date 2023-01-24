pipeline {
  agent any
  stages {
    stage('e2e-tests') {
         steps {

          env.NODEJS_HOME = "${tool node7}"
          env.PATH="${env.NODEJS_HOME}:${env.PATH}"
          echo ${env.PATH}
          sh 'node -version'
            sh 'npm install'
            sh 'npm run test'
         }
    }
  }
}
