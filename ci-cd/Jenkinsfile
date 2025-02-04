pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Hussain1204/DevSecOps-Project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("devsecops-nodejs-app:${env.BUILD_ID}")
                }
            }
        }
        stage('Security Scan') {
            steps {
                script {
                    sh 'trivy image devsecops-nodejs-app:${env.BUILD_ID}'
                }
            }
        }
        stage('Push Image to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'hussain1204') {
                        docker.image("devsecops-nodejs-app:${env.BUILD_ID}").push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f k8s/deployment.yaml'
                }
            }
        }
    }
}

