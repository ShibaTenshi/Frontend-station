pipeline {
     agent any
     environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
        IMAGE = 'oyashiz/shibaqueue-station'
     }

     stages {
          stage('Npm Install') {
               steps {
                    sh 'npm install'
               }
          }
          stage('Node Build') {
               steps {
                    sh 'npm run build'
               }
          }
          stage('Docker Build') {
                         steps {
                              sh 'docker image rm ${IMAGE} -f'
                              sh 'docker build -t ${IMAGE} .'
                         }
                    }
          stage('Docker Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
          }
          stage('Docker Push') {
                      steps {
                          sh 'docker push ${IMAGE}'
                          sh 'docker image rm ${IMAGE} -f'
                      }
          }
     }
     post {
        always {
            sh 'docker logout'
            cleanWs(cleanWhenNotBuilt: false,
                                deleteDirs: true,
                                disableDeferredWipeout: true,
                                notFailBuild: true,
                                patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                                           [pattern: '.propsfile', type: 'EXCLUDE']])
        }
     }
}