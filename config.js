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
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
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
