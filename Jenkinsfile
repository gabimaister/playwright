pipeline {
  agent {
    label 'agent1'
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''#!/bin/bash
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''#!/bin/bash
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}