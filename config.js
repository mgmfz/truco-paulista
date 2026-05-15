// ============================================================
//  CONFIGURAÇÃO DO FIREBASE
//  
//  1. Acesse https://console.firebase.google.com/
//  2. Crie um projeto (ex: "truco-paulista")
//  3. Vá em "Criação" > "Realtime Database" > "Criar banco de dados"
//     - Escolha qualquer região
//     - Inicie no "modo de teste" (para facilitar)
//  4. Vá nas configurações do projeto (ícone de engrenagem)
//  5. Em "Seus apps" > adicione um app Web (</>)
//  6. Copie os valores de firebaseConfig e cole abaixo:
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDhCcK8GrtMgIKTxScR_fJ8-2QRjrtDj04",
  authDomain: "truco-paulista-cf395.firebaseapp.com",
  databaseURL: "https://truco-paulista-cf395-default-rtdb.firebaseio.com",
  projectId: "truco-paulista-cf395",
  storageBucket: "truco-paulista-cf395.firebasestorage.app",
  messagingSenderId: "455054101503",
  appId: "1:455054101503:web:94ca181aca60f447bb75ca"
};

// ============================================================
//  REGRAS DO BANCO DE DADOS
//  
//  No console do Firebase, vá em Realtime Database > Regras
//  e cole o seguinte (para testes — qualquer um pode ler/escrever):
//
//  {
//    "rules": {
//      ".read": true,
//      ".write": true
//    }
//  }
//
//  Para produção, use regras mais restritivas.
// ============================================================
